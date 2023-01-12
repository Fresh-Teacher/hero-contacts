import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
    selector: 'dashboard-screeen',
    templateUrl: './index.screen.html',
})
export class DashboardScreen {
    isTablet: boolean = true;
    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _common: CommonService
    ) {
        // this._router.navigate(['contacts'], {
        //     relativeTo: this._route,
        // });
        this._common.getBrowserWidth().subscribe((width) => {
            if (width <= 1024) {
                this.isTablet = true;
            } else {
                this.isTablet = false;
            }
        });
        this._common.setTheme('light');
    }
}
