import { Location } from '@angular/common';
import { Contact } from './../../model/contacts.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
    selector: 'detailed-view',
    templateUrl: './detailed-contact.html',
})
export class DetailedContactScreen implements OnInit {
    contact: Contact;
    constructor(
        public _route: ActivatedRoute,
        private _loc: Location,
        private _common: CommonService
    ) {}

    async ngOnInit(): Promise<void> {
        this.contact = this._route.snapshot.data['contact'];
        this._common.setTitle(this.contact.name);
    }
    back(): void {
        this._loc.back();
    }
}
