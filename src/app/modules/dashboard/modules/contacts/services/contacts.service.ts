import { Injectable, OnDestroy } from '@angular/core';
import { User } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { randomAvatarUrlGenerator } from 'src/app/modules/auth/utils/auth.util';
import { Contact } from '../model/contacts.model';

@Injectable({
    providedIn: 'root',
})
export class ContactService implements OnDestroy {
    user: User;
    list: Contact[] = [
        {
            id: Math.random() + '',
            name: 'Let us say I am Dummy',
            description: ' No nned Description ....',
            photoUrl: randomAvatarUrlGenerator(),
            status: 'active',
            contacts: [
                {
                    email: 'TrialEmail@gmail.com',
                    phone: 9797979797,
                },
            ],
        },
    ];

    contacts: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>(
        this.list
    );

    constructor(private _auth: AuthService) {
        this._auth.user.subscribe((user) => (this.user = user));
    }

    ngOnDestroy(): void {
        this._auth.user.unsubscribe();
    }
}
