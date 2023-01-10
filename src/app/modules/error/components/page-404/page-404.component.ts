import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'page-not-found',
    templateUrl: './page-404.component.html',
    styleUrls: ['./page-404.component.scss'],
})
export class PageNotFoundComponent {
    constructor(private _router: Router, private _location: Location) {}
    goHome(): void {
        this._router.navigate(['']);
    }
    goBack(): void {
        this._location.back();
    }
}
