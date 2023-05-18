import { Contact, ContactsQueryParams } from './../model/contacts.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class ContactFormResolver implements Resolve<Contact> {
    constructor(private _fire: Firestore) {}
    async resolve(route: ActivatedRouteSnapshot): Promise<Contact> {
        const id = route.queryParams['id'];
        const userId = route.queryParams['user'];
        const mode = route.queryParams['mode'];
        if (mode === ContactsQueryParams.EDIT) {
            const docs = await getDoc(doc(this._fire, userId, id));
            return docs.data() as Contact;
        } else {
            return null;
        }
    }
}
