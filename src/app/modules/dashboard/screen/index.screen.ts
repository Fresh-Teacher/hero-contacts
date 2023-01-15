import { User } from '@angular/fire/auth';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from '../../auth/services/auth.service';
import { COMMONENUM, Theme } from 'src/app/types/common-types';

@Component({
    selector: 'dashboard-screeen',
    templateUrl: './index.screen.html',
})
export class DashboardScreen implements AfterViewInit {
    isTablet: boolean = true;
    loggedInUser: User;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _common: CommonService,
        private _auth: AuthService
    ) {
        this._common.setTitle('Dashboard');
        this._auth.user.subscribe((user) => {
            this.loggedInUser = user;
            console.log(this.loggedInUser);
        });
        this._common.getBrowserWidth().subscribe((width) => {
            if (width <= 1024) {
                this.isTablet = true;
            } else {
                this.isTablet = false;
            }
        });
        const theme = localStorage.getItem(COMMONENUM.THEME) as Theme;
        if (theme) {
            this._common.setTheme(theme);
        }
    }
    async logout(): Promise<void> {
        await this._auth.signOut();
    }

    ngAfterViewInit(): void {}
}
