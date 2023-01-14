import { Injectable } from '@angular/core';
import {
    Auth,
    signInWithPopup,
    signOut,
    User,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ToastService } from 'src/app/services/toaster.service';

type LoggedInUser = User | null;

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    user: BehaviorSubject<LoggedInUser> = new BehaviorSubject<LoggedInUser>(
        null
    );
    constructor(
        private _auth: Auth,
        private _toastr: ToastService,
        private _router: Router,
        private _provider: GoogleAuthProvider
    ) {}

    async signUp(email: string, password: string): Promise<void> {
        try {
            const userCreds = await createUserWithEmailAndPassword(
                this._auth,
                email,
                password
            );
            console.log(userCreds);
            this.user.next(userCreds.user);
            this._router.navigate(['dashboard/contacts']);
            this._toastr.success('Successfully SignedUp!');
        } catch (err) {
            console.error(err);
            this._toastr.error('SigningUp Failed!');
        }
    }

    async signInWithGoogle(): Promise<void> {
        try {
            const userCreds = await signInWithPopup(this._auth, this._provider);
            console.log(userCreds);
            this.user.next({ ...this.user.value, ...userCreds.user });
            console.log(this.user.value);
            this._router.navigate(['dashboard']);
            this._toastr.success('Logged In!');
        } catch (err) {
            console.error(err);
            this._toastr.error(err.message);
        }
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
