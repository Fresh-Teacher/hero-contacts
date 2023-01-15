import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { ToastService } from 'src/app/services/toaster.service';
import { fadeInOut } from '../../shared/animations/shared.animations';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    animations: [fadeInOut],
    providers: [AuthService],
})
export class IndexComponent implements OnInit {
    authForm = this._fb.group({
        name: new FormControl('', [
            Validators.required,
            Validators.maxLength(15),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
        ]),
    });

    isLoading = false;
    constructor(
        private _router: Router,
        private _common: CommonService,
        private _fb: FormBuilder,
        private _auth: AuthService,
        private _toastr: ToastService
    ) {
        this._common.setTitle('Auth');
        console.log(this.authForm.valid);
    }

    get email(): AbstractControl {
        return this.authForm.get('email');
    }

    get password(): AbstractControl {
        return this.authForm.get('password');
    }

    get name(): AbstractControl {
        return this.authForm.get('name');
    }
    signInWithGoogle(): void {
        this.isLoading = true;
        this._auth.signInWithGoogle().subscribe({
            next: (value) => {
                this._router.navigate(['dashboard']);
                this._toastr.success(`Signed in as ${value.displayName}`);
                this.isLoading = false;
            },
            error: (err) => {
                this.isLoading = false;
                this._toastr.error(err.message);
            },
            complete: () => {},
        });
    }

    async submitForm(): Promise<void> {
        try {
            this.isLoading = true;
            const { email, password, name } = this.authForm.value;
            await this._auth.signUp(name, email, password);
            this.authForm.reset();
            this.isLoading = false;
        } catch (err) {
            console.error(err);
            this.isLoading = false;
        }
    }

    ngOnInit(): void {}
    goToDashboard(): void {
        this._router.navigate(['dashboard']);
    }
}
