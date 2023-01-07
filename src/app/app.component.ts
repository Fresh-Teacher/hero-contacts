import { TitleService } from './services/title/title.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private _title: TitleService, private _router: Router) {
        this._title.setTitle('Home');
    }
}
