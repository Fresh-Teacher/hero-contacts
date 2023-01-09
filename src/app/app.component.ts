import { TitleService } from './services/title/title.service';
import { Component } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    isTablet = false;
    constructor(private _title: TitleService, private _theme: ThemeService) {
        this._title.setTitle('Home');
        this._theme.getBrowserWidth().subscribe((width) => {
            console.log(width);
            if (width <= 1024) {
                this.isTablet = true;
            } else {
                this.isTablet = false;
            }
        });
    }
}
