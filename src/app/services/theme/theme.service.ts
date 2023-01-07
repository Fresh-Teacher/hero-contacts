import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    constructor() {}

    setTheme(theme: string): void {
        document.querySelector('html')?.setAttribute('data-theme', theme);
    }
}
