import { TitleService } from './services/title/title.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private _title: TitleService) {
        this._title.setTitle('Home');
    }
}
