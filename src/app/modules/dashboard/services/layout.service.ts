import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    constructor() {}

    numberOfCardSelected = new BehaviorSubject<number>(0);
}
