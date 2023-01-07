import { DOCUMENT, ɵgetDOM as getDOM } from '@angular/common';
import { Inject, Injectable, ɵɵinject } from '@angular/core';
import { TStoFix } from '../../types/common-types';

export function createTitle() {
    return new TitleService(ɵɵinject(DOCUMENT));
}

@Injectable({ providedIn: 'root', useFactory: createTitle, deps: [] })
export class TitleService {
    constructor(@Inject(DOCUMENT) private _doc: TStoFix) {}

    getTitle(): string {
        return this._doc.title;
    }

    setTitle(newTitle: string) {
        this._doc.title = `My Contacts | ${newTitle}`;
    }
}
