import { Component } from '@angular/core';
import { TitleService } from 'src/app/services/title/title.service';

@Component({
    selector: 'dashboard-screeen',
    templateUrl: './index.screen.html',
    styleUrls: ['./index.screen.scss'],
})
export class DashboardScreen {
    constructor(private _title: TitleService) {
        this._title.setTitle('Dashboard');
    }
}
