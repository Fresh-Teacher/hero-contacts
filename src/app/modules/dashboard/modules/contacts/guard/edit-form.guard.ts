import { Injectable } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Contact, ContactsQueryParams } from '../model/contacts.model';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CanActivateEditForm implements CanActivate {
    constructor(
        private _fire: Firestore,
        private _router: Router,
        private _toastr: ToastrService
    ) {}

    async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
        const id = route.queryParams['id'];
        const userId = route.queryParams['user'];
        const mode = route.queryParams['mode'];
        if (mode === ContactsQueryParams.EDIT) {
            const res = await getDoc(doc(this._fire, userId, id)).then(
                (res) => res.data() as Contact
            );
            if (res) {
                console.info('Authorized Document Access Success');
                return true;
            } else {
                console.error('Unauthorized Access');
                this._router.navigate(['/dashboard/contacts']);
                this._toastr.error('No Such Document Exist');
                return false;
            }
        } else {
            return true;
        }
    }
}
