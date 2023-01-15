import { errorGenerator, randomAvatarUrlGenerator } from './../utils/auth.util';
import { Injectable } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import {
    Auth,
    signInWithPopup,
    signOut,
    User,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    updateProfile,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import {
    BehaviorSubject,
    catchError,
    from,
    map,
    retry,
    tap,
    throwError,
} from 'rxjs';
import { ToastService } from 'src/app/services/toaster.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
    constructor(
        private _auth: Auth,
        private _toastr: ToastService,
        private _router: Router,
        private _provider: GoogleAuthProvider
    ) {
        this._auth.onAuthStateChanged((user) => {
            if (user) {
                this.user.next(user);
            }
        });
    }

    async signUp(
        fullname: string,
        email: string,
        password: string
    ): Promise<void> {
        try {
            const userCreds = await createUserWithEmailAndPassword(
                this._auth,
                email,
                password
            );
            await updateProfile(userCreds.user, {
                displayName: fullname,
                photoURL: randomAvatarUrlGenerator(),
            });
            this.user.next(userCreds.user);
            this._router.navigate(['dashboard/contacts']);
            this._toastr.success(`Logged In as ${this.user.value.displayName}`);
        } catch (err) {
            if (err instanceof FirebaseError) {
                console.error('Firebase Error', err);
                const errorMessage = errorGenerator(err.message);
                this._toastr.error(errorMessage);
            }
        }
    }

    signInWithGoogle(): Observable<User> {
        return from(signInWithPopup(this._auth, this._provider)).pipe(
            map(({ user }) => user),
            tap((data) => this.user.next(data)),
            retry(2),
            catchError((err: FirebaseError) => throwError(err))
        );
    }

    async signOut(): Promise<void> {
        try {
            await signOut(this._auth);
            this.user.next(null);
            this._router.navigate(['auth']);
            this._toastr.success('Loggedout successfully');
        } catch (error) {
            console.error(error);
            this._toastr.error('Loggingout failed!');
        }
    }
}
