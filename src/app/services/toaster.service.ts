import { Injectable } from '@angular/core';
import { ToastrService, ActiveToast, Toast } from 'ngx-toastr';

interface ToastTypes {
    SUCCESS: string;
    ERROR: string;
    WARNING: string;
    INFO: string;
}
const TOAST_TITLES: ToastTypes = {
    SUCCESS: 'Success',
    ERROR: 'Error',
    WARNING: 'Warning',
    INFO: 'Info',
};

@Injectable({ providedIn: 'root' })
export class ToastService {
    private TOAST_TYPE_TITLES = TOAST_TITLES;
    constructor(private _toastr: ToastrService) {}

    /**
     * Display a success toast message with a message
     */
    success(message: string, options = {}): ActiveToast<Toast> {
        return this._toastr.success(message, this.TOAST_TYPE_TITLES.SUCCESS);
    }

    /**
     * Display an error toast message with a message
     */
    error(message: string, options = {}): ActiveToast<Toast> {
        return this._toastr.error(message, this.TOAST_TYPE_TITLES.ERROR);
    }

    /**
     * Display a warning toast message with a message
     */
    warning(message: string, options = {}): ActiveToast<Toast> {
        return this._toastr.warning(message, this.TOAST_TYPE_TITLES.WARNING);
    }

    /**
     * Display an info toast message with a message
     */
    info(message: string, options = {}): ActiveToast<Toast> {
        return this._toastr.info(message, this.TOAST_TYPE_TITLES.INFO);
    }

    get isToastActive(): boolean {
        return this._toastr.currentlyActive > 0;
    }
}
