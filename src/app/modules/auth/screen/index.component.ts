import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
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

    get name(): AbstractControl {
        return this.authForm.get('name');
    }
    async signInWithGoogle(): Promise<void> {
        await this._auth.signInWithGoogle();
    }

    async submitForm(): Promise<void> {
        const { email, password, name } = this.authForm.value;
        this._auth.signUp(name, email, password);
        this.authForm.reset();
    }

    ngOnInit(): void {}
    goToDashboard(): void {
        this._router.navigate(['dashboard']);
    }
}
