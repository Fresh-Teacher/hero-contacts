import { LayoutService } from 'src/app/modules/dashboard/services/layout.service';
import { CommonService } from 'src/app/services/common.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
    fadeInOut,
    fade,
    staggedIn,
} from 'src/app/modules/shared/animations/shared.animations';

import { CardStatus, Contact } from '../../model/contacts.model';
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
    cards: CardStatus[];
    constructor(
        private _common: CommonService,
        private _layout: LayoutService,
        private _contactService: ContactService
    ) {
        this._common.setTitle('Contacts - Dashboard');
    }
    async ngOnInit(): Promise<void> {
        this.list = this._contactService.getContacts();

        this.subscriptions.push(
            this._layout.selectedCards.subscribe((cards) => {
                this.cards = cards;
                if (cards.length >= 1) {
                    this.isMultiSelected = true;
                } else {
                    this.isMultiSelected = false;
                }
            })
        );
    }

    async onCheck({ id, checked }: CardStatus): Promise<void> {
        if (checked) {
            if (!this.cards.some((card) => card.id === id)) {
                this.cards.push({ id, checked });
            }
        } else {
            const index = this.cards.findIndex((card) => card.id === id);
            if (index !== -1) {
                this.cards.splice(index, 1);
            }
        }
        console.log(this.cards);
        this._layout.selectedCards.next(this.cards);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((e) => e.unsubscribe());
    }
}
