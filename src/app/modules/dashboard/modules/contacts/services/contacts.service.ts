import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { COLLECTIONS, Contact } from '../model/contacts.model';
import { enableNetwork } from '@angular/fire/firestore';
import { ToastService } from 'src/app/services/toaster.service';

@Injectable({
    providedIn: 'root',
})
export class ContactService {
    user: User;

    contactsCollection: AngularFirestoreCollection<Contact>;
    constructor(
        private _auth: AuthService,
        private _afs: AngularFirestore,
        private _afc: Firestore,
        private _toastr: ToastService
    ) {
        this._auth.user.subscribe((user) => (this.user = user));
    }

    getContacts(): Observable<Contact[]> {
        enableNetwork(this._afc)
            .then((result) => result as void)
            .catch((error) => this._toastr.error(error.message));

        this.contactsCollection = this._afs
            .collection(COLLECTIONS.USERS)
            .doc(`${this.user.uid}`)
            .collection(COLLECTIONS.CONTACTS);

        return this.contactsCollection
            .valueChanges()
            .pipe(tap((data) => console.log(data)));
    }

    generateDocument(id?: string) {
        return this._afs
            .collection(COLLECTIONS.USERS)
            .doc(`${this.user.uid}`)
            .collection(COLLECTIONS.CONTACTS)
            .doc('SomedummyId');
    }

    async addContact(contact: Contact) {
        return await this.generateDocument().set(contact);
    }
}
