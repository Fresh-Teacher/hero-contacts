import { LayoutService } from 'src/app/modules/dashboard/services/layout.service';
import { CommonService } from 'src/app/services/common.service';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toaster.service';
import { fadeInOut } from 'src/app/modules/shared/animations/shared.animations';

import { Contact } from '../../model/contacts.model';
import {
    AngularFirestore,
    AngularFirestoreCollection,
    AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { ContactService } from '../../services/contacts.service';

@Component({
    selector: 'contacts-screen',
    templateUrl: './index.screen.html',
    animations: [fadeInOut],
})
export class ContactsIndexScreen implements OnInit {
    contactsCollection: AngularFirestoreCollection<Contact>;

    list: Observable<Contact[]>;

    userID: string;
    isMultiSelected!: boolean;
    constructor(
        private _common: CommonService,
        private _layout: LayoutService,
        private _toastr: ToastService,
        private _afs: AngularFirestore,
        private _auth: AuthService,
        private _contactService: ContactService
    ) {
        this._common.setTitle('Contacts - Dashboard');
        this._layout.numberOfCardSelected.subscribe((count) => {
            if (count) {
                this.isMultiSelected = true;
            } else {
                this.isMultiSelected = false;
            }
        });
    }

    async ngOnInit(): Promise<void> {
        this.list = this._contactService.getContacts();
        this._toastr.success('Fetched Contacts Data!!');
    }

    addModal(): void {}

    onCheck({ id, isChecked }: { id: number; isChecked: boolean }): void {
        // console.log(id, isChecked);
        // const clickedItem = this.list[id];
        // clickedItem.isChecked = isChecked;
        // console.log(this.list);
    }

    onMultipleDelete(): void {
        // const originalLength = this.list.length;
        // this.list = this.list.filter((e) => !e.isChecked);
        // console.log(this.list);
        // const afterDelete = this.list.length;
        // this._layout.numberOfCardSelected.next(
        //     this._layout.numberOfCardSelected.value -
        //         (originalLength - afterDelete)
        // );
        // console.log(this._layout.numberOfCardSelected.value);
    }
}
