import { Injectable } from '@angular/core';
import { fromEvent, map, Observable } from 'rxjs';
import { TStoFix } from 'src/app/types/common-types';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    constructor() {}

    getBrowserWidth(): Observable<number> {
        return fromEvent(window, 'resize').pipe(
            map((val: TStoFix) => val['target']['innerWidth'])
        );
    }
    setTheme(theme: string): void {
        document.querySelector('html')?.setAttribute('data-theme', theme);
    }
}
