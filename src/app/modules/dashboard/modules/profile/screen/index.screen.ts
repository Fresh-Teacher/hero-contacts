import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { ToastService } from 'src/app/services/toaster.service';
import { User } from '@angular/fire/auth';
@Component({
    selector: 'profile',
    templateUrl: './index.screen.html',
})
export class IndexProfileScreen {
    user: User;
    constructor(private _toastr: ToastService, private _auth: AuthService) {
        this._auth.user.subscribe((user) => (this.user = user));
    }
}
