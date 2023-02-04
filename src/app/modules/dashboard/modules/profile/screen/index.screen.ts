import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { updateProfile, User } from '@angular/fire/auth';
import {
    AngularFireStorage,
    AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { TStoFix } from 'src/app/types/common-types';
import { ToastService } from 'src/app/services/toaster.service';
@Component({
    selector: 'profile',
    templateUrl: './index.screen.html',
})
export class IndexProfileScreen {
    task: AngularFireUploadTask;

    percentage: number;
    user: User;

    constructor(
        private _auth: AuthService,
        private _fireStorage: AngularFireStorage,
        private _toastr: ToastService
    ) {
        this._auth.user.subscribe((user) => (this.user = user));
    }
    async uploadprofile(event: TStoFix) {
        try {
            const file: Blob = event.target.files[0];
            const filepath = `${this.user.uid}.png`;
            const fileRef = this._fireStorage.ref(filepath);
            this.task = this._fireStorage.upload(filepath, file, {
                cacheControl: 'true',
            });

            this.task
                .percentageChanges()
                .subscribe((count) => (this.percentage = count));

            const url = (await fileRef.getDownloadURL().toPromise()) as string;
            await updateProfile(this._auth.user.value, { photoURL: url });
            this._toastr.success('Profile Updated Successfully!');
        } catch (err) {
            console.error(err);
            this._toastr.error('Unable to update profile!');
        }
    }
}
