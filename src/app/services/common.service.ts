import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, ɵɵinject } from '@angular/core';
import { Observable, fromEvent, map, BehaviorSubject } from 'rxjs';
import { COMMONENUM, Theme, TStoFix } from 'src/app/types/common-types';

export function createTitle() {
    return new CommonService(ɵɵinject(DOCUMENT));
}

@Injectable({
    providedIn: 'root',
    useFactory: createTitle,
    deps: [],
})
export class CommonService {
    theme: BehaviorSubject<Theme> = new BehaviorSubject<Theme>('light');
    constructor(@Inject(DOCUMENT) private _doc: TStoFix) {}
    getBrowserWidth(): Observable<number> {
        return fromEvent(window, 'resize').pipe(
            map((val: TStoFix) => val['target']['innerWidth'])
        );
    }
    setTitle(newTitle: string) {
        this._doc.title = `${newTitle} | My Contacts`;
    }
    setTheme(theme: string): void {
        const HtmlTag = document.querySelector('html');
        if (HtmlTag) {
            HtmlTag.setAttribute('data-theme', theme);
            localStorage.setItem(COMMONENUM.THEME, theme);
            this.theme.next(theme as Theme);
        }
    }
}
