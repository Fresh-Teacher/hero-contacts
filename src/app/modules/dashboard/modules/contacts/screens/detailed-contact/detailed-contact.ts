import { Location } from '@angular/common';
import { Contact } from './../../model/contacts.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'detailed-view',
    templateUrl: './detailed-contact.html',
})
export class DetailedContactScreen implements OnInit {
    contact: Contact;
    constructor(public _route: ActivatedRoute, private _loc: Location) {}

    async ngOnInit(): Promise<void> {
        this.contact = this._route.snapshot.data['contact'];
    }
    back(): void {
        this._loc.back();
    }
}
