import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    animations: [
        trigger('fade', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate(500, style({ opacity: 1 })),
            ]),
            transition('* => void', [animate(500, style({ opacity: 0 }))]),
        ]),
    ],
    providers: [AuthService],
})
export class IndexComponent implements OnInit {
    authForm = this._fb.group({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
        ]),
    });
    constructor(
        private _router: Router,
        private _common: CommonService,
        private _fb: FormBuilder,
        private _auth: AuthService
    ) {
        this._common.setTitle('Auth');
    }

    get email(): AbstractControl {
        return this.authForm.get('email');
    }

    get password(): AbstractControl {
        return this.authForm.get('password');
    }

    async signInWithGoogle(): Promise<void> {
        await this._auth.signInWithGoogle();
    }

    async submitForm(): Promise<void> {
        const { email, password } = this.authForm.value;
        this._auth.signUp(email, password);
        this.authForm.reset();
    }

    ngOnInit(): void {}
    goToDashboard(): void {
        this._router.navigate(['dashboard']);
    }
}
