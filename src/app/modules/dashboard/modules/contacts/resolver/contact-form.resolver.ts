import { Contact, ContactsQueryParams } from './../model/contacts.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactFormResolver implements Resolve<Contact> {
    constructor(private _fire: Firestore) {}
    resolve(
        route: ActivatedRouteSnapshot
    ): Promise<Contact> | Observable<Contact> {
        const id = route.queryParams['id'];
        const userId = route.queryParams['user'];
        const mode = route.queryParams['mode'];
        if (mode === ContactsQueryParams.EDIT) {
            return getDoc(doc(this._fire, userId, id)).then(
                (data) => data.data() as Contact
            );
        } else {
            return null;
        }
    }
}
