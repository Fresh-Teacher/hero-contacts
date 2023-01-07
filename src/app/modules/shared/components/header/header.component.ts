import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { TStoFix } from 'src/app/types/common-types';

@Component({
    selector: 'application-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor(private _theme: ThemeService) {}
    toggleTheme(event: TStoFix) {
        if (!event.target.checked) {
            this._theme.setTheme('light');
        } else {
            this._theme.setTheme('dark');
        }
    }
}
