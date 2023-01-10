import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'dashboard-screeen',
    template: ` <router-outlet> </router-outlet>`,
})
export class DashboardScreen {
    constructor(private _router: Router, private _route: ActivatedRoute) {
        this._router.navigate(['contacts'], {
            relativeTo: this._route,
        });
    }
}
