import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { Theme, TStoFix } from 'src/app/types/common-types';

enum THEMES {
    DARCULA = 'dracula',
    LIGHT = 'light',
}
@Component({
    selector: 'theme-toggler',
    templateUrl: './theme-toggler.component.html',
})
export class ThemeToggler implements OnDestroy {
    @Input() panelClass: string;
    theme: Theme;
    commonEnum = THEMES;
    subscriptions: Subscription[] = [];
    constructor(private _common: CommonService) {
        this.subscriptions.push(
            this._common.theme.subscribe((theme) => (this.theme = theme))
        );
    }
    toggleTheme(event: TStoFix) {
        if (!event.target.checked) {
            this._common.setTheme(THEMES.LIGHT);
        } else {
            this._common.setTheme(THEMES.DARCULA);
        }
    }
    ngOnDestroy(): void {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
