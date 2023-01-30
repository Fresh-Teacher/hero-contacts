import { Contact } from './../model/contacts.model';
import { Injectable } from '@angular/core';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DetailedContactDataResolver implements Resolve<Contact> {
    constructor(private _fire: Firestore) {}
    resolve(
        route: ActivatedRouteSnapshot
    ): Contact | Observable<Contact> | Promise<Contact> {
        const id = route.queryParams['id'];
        const userId = route.queryParams['user'];
        return getDoc(doc(this._fire, userId, id)).then(
            (data) => data.data() as Contact
        );
    }
}
