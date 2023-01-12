import { Injectable } from '@angular/core';
import { ToastService } from './toaster.service';
import { fromEvent } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NetworkManagerService {
    public isOnline$ = fromEvent(window, 'online');
    public isOffline$ = fromEvent(window, 'offline');

    constructor(private _toast: ToastService) {
        this.isOnline$.subscribe(() => {
            this._toast.success('You are back Online !');
        });
        this.isOffline$.subscribe(() => {
            this._toast.warning(`You'ev Lost Your Internet Connection`);
        });
    }
}
