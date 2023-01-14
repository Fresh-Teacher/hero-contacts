import { Component } from '@angular/core';
import { NetworkManagerService } from 'src/app/services/network-manager.service';
import { ToastService } from 'src/app/services/toaster.service';

@Component({
    selector: 'profile',
    templateUrl: './index.screen.html',
})
export class IndexProfileScreen {
    constructor(
        private _toastr: ToastService,
        private _network: NetworkManagerService
    ) {}
}
