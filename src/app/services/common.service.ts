import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { COMMONENUM, Theme } from 'src/app/types/common-types';

@Injectable({
    providedIn: 'root',
})
export class CommonService {
    theme: BehaviorSubject<Theme> = new BehaviorSubject<Theme>('light');
    constructor(private _title: Title) {}
    setTitle(newTitle: string) {
        this._title.setTitle(`${newTitle} | My Contacts`);
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
