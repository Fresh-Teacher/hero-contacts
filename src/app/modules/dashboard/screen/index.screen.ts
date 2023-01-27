import { User } from '@angular/fire/auth';
import { Component, OnDestroy } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from '../../auth/services/auth.service';
import { COMMONENUM, Theme } from 'src/app/types/common-types';
import { Subscription } from 'rxjs';

@Component({
    selector: 'dashboard-screeen',
    templateUrl: './index.screen.html',
})
export class DashboardScreen implements OnDestroy {
    isTablet: boolean = true;
    subscriptions: Subscription[] = [];
    loggedInUser: User;
    profilePic: string;

    constructor(private _common: CommonService, private _auth: AuthService) {
        this._common.setTitle('Dashboard');
        this.subscriptions.push(
            this._auth.user.subscribe((user) => {
                this.loggedInUser = user;
            }),
            this._common.getBrowserWidth().subscribe((width) => {
                if (width <= 1024) {
                    this.isTablet = true;
                } else {
                    this.isTablet = false;
                }
            })
        );
        const theme = localStorage.getItem(COMMONENUM.THEME) as Theme;
        if (theme) {
            this._common.setTheme(theme);
        }
    }
    async logout(): Promise<void> {
        await this._auth.signOut();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((e) => e.unsubscribe());
    }
}
