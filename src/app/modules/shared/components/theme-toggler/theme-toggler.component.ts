import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { TStoFix } from 'src/app/types/common-types';

@Component({
    selector: 'theme-toggler',
    templateUrl: './theme-toggler.component.html',
})
export class ThemeToggler {
    constructor(private _common: CommonService) {}
    toggleTheme(event: TStoFix) {
        if (!event.target.checked) {
            this._common.setTheme('light');
        } else {
            this._common.setTheme('night');
        }
    }
}
