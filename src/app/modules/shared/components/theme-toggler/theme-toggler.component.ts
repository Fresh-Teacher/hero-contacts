import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { TStoFix } from 'src/app/types/common-types';

@Component({
    selector: 'theme-toggler',
    templateUrl: './theme-toggler.component.html',
})
export class ThemeToggler {
    constructor(private _theme: ThemeService) {}
    toggleTheme(event: TStoFix) {
        if (event.target.checked) {
            this._theme.setTheme('light');
        } else {
            this._theme.setTheme('dark');
        }
    }
}
