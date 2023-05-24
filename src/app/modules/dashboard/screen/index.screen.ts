import { User } from '@angular/fire/auth';
import { Component, Inject, OnDestroy } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from '../../auth/services/auth.service';
import { COMMONENUM, Theme } from 'src/app/types/common-types';
import { Subscription } from 'rxjs';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'dashboard-screeen',
    templateUrl: './index.screen.html',
})
export class DashboardScreen implements OnDestroy {
    subscriptions: Subscription[] = [];
    loggedInUser: User;
    profilePic: string;
    contentLoaded: boolean;

    constructor(
        private _common: CommonService,
        private _auth: AuthService,
        private _router: Router,
        @Inject(DOCUMENT) private _document: Document
    ) {
        this._common.setTitle('Dashboard');
        this.subscriptions.push(
            this._auth.user.subscribe((user) => {
                this.loggedInUser = user;
            }),

            this._router.events.subscribe((event) => {
                if (event instanceof NavigationStart)
                    this.contentLoaded = false;
                else if (event instanceof NavigationEnd)
                    this.contentLoaded = true;
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
    closeSidebar(): void {
        const sidebarToggler = this._document.getElementById('overlay');
        sidebarToggler.click();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((e) => e.unsubscribe());
    }
}
