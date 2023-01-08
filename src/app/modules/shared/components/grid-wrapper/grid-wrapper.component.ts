import { Component } from '@angular/core';

@Component({
    selector: 'grid-wrapper',
    templateUrl: './grid-wrapper.component.html',
    styleUrls: ['./grid-wrapper.component.scss'],
})
export class GridWrapper {
    constructor() {}

    list = Array.from({ length: 20 }, (e, i) => i);
}
