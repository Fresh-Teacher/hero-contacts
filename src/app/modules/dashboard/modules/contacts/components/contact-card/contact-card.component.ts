import { trigger, transition, style, animate } from '@angular/animations';
import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
} from '@angular/core';
import { LayoutService } from 'src/app/modules/dashboard/services/layout.service';
import { TStoFix } from 'src/app/types/common-types';

@Component({
    selector: 'contact-card',
    templateUrl: './contact-card.component.html',
    animations: [
        trigger('fade', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate(500, style({ opacity: 1 })),
            ]),
            transition('* => void', [animate(500, style({ opacity: 0 }))]),
        ]),
    ],
    styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent {
    @Output() onCheck = new EventEmitter<{ id: number; isChecked: boolean }>();
    isMultiSelected = false;
    @Input() ids = 0;
    constructor(private _layout: LayoutService) {
        this._layout.numberOfCardSelected.subscribe((count) => {
            if (count) {
                this.isMultiSelected = true;
            } else {
                this.isMultiSelected = false;
            }
        });
    }

    onMultiSelect(event: TStoFix): void {
        if (event.target.checked) {
            this._layout.numberOfCardSelected.next(
                this._layout.numberOfCardSelected.value + 1
            );
        } else {
            this._layout.numberOfCardSelected.next(
                this._layout.numberOfCardSelected.value - 1
            );
        }
        this.onCheck.emit({
            id: +event.target.value,
            isChecked: Boolean(event.target.checked),
        });
    }
}
