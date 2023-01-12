import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[networkDisabled]' })
export class NewtworkManagerDirective {
    constructor(private _elRef: ElementRef<HTMLElement>) {}

    ngOnInit(): void {
        if (navigator.onLine) {
            this.enabledButton();
        } else {
            this.disableButton();
        }
    }

    @HostListener('window:offline')
    disableButton(): void {
        if (this._elRef.nativeElement instanceof HTMLButtonElement) {
            this._elRef.nativeElement.disabled = true;
            this._elRef.nativeElement.classList.add('btn-disabled');
        } else {
            this._elRef.nativeElement.classList.add('network_disabled');
        }
    }

    @HostListener('window:online')
    enabledButton(): void {
        this._elRef.nativeElement.classList.remove('network_disabled');
        this._elRef.nativeElement.classList.remove('btn-disabled');
        if (this._elRef.nativeElement instanceof HTMLButtonElement) {
            this._elRef.nativeElement.disabled = false;
        }
    }
}
