import { LayoutService } from 'src/app/modules/dashboard/services/layout.service';
import { CommonService } from 'src/app/services/common.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toaster.service';
import {
    fadeInOut,
    fade,
    staggedIn,
} from 'src/app/modules/shared/animations/shared.animations';

import { Contact } from '../../model/contacts.model';
import { ContactService } from '../../services/contacts.service';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'contacts-screen',
    templateUrl: './index.screen.html',
    animations: [fadeInOut, fade, staggedIn],
})
export class ContactsIndexScreen implements OnInit, OnDestroy {
    list: Observable<Contact[]>;
    isMultiSelected!: boolean;
    subscriptions: Subscription[] = [];
    constructor(
        private _common: CommonService,
        private _layout: LayoutService,
        private _toastr: ToastService,
        private _contactService: ContactService
    ) {
        this._common.setTitle('Contacts - Dashboard');
    }
    async ngOnInit(): Promise<void> {
        this.list = this._contactService.getContacts();

        this.subscriptions.push(
            this._layout.numberOfCardSelected.subscribe((count) => {
                if (count) {
                    this.isMultiSelected = true;
                } else {
                    this.isMultiSelected = false;
                }
            })
        );
    }

    async onCheck(ids: string[]): Promise<void> {
        // try {
        //     this._contactService.deleteMultiple(ids);
        // } catch (err) {
        //     this._toastr.error(`Unable to Delete ${ids.length} Contacts!!`);
        // }
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((e) => e.unsubscribe());
    }
}
