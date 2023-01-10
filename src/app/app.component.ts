import { Component } from '@angular/core';
import { CommonService } from './services/common/common.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    isTablet = false;
    constructor(private _common: CommonService) {
        this._common.setTitle('Home');
        this._common.getBrowserWidth().subscribe((width) => {
            console.log(width);
            if (width <= 1024) {
                this.isTablet = true;
            } else {
                this.isTablet = false;
            }
        });
    }
}
