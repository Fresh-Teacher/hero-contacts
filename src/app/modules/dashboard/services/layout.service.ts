import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardStatus } from '../modules/contacts/model/contacts.model';

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    constructor() {}

    selectedCards = new BehaviorSubject<CardStatus[]>([]);
    numberOfCardSelected = new BehaviorSubject<number>(0);
}
