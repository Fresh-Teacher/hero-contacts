import { Injectable } from '@angular/core';
import { Auth, signOut, User } from '@angular/fire/auth';
import { createUserWithEmailAndPassword } from '@firebase/auth';
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
    constructor(private _auth: Auth, private _toastr: ToastService) {}

    async signUp(email: string, password: string): Promise<void> {
        try {
            const userCreds = await createUserWithEmailAndPassword(
                this._auth,
                email,
                password
            );
            console.log(userCreds);
            this.user.next(userCreds.user);
            this._toastr.success('Successfully SignedUp!');
        } catch (err) {
            this._toastr.error('SigningUp Failed!');
        }
    }

    async signOut(): Promise<void> {
        try {
            await signOut(this._auth);
            this.user.next(null);
            this._toastr.success('Loggedout successfully');
        } catch (error) {
            this._toastr.error('Loggingout failed!');
        }
    }
}
