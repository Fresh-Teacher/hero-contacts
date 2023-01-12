import { LayoutService } from 'src/app/modules/dashboard/services/layout.service';
import { CommonService } from 'src/app/services/common.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { ToastService } from 'src/app/services/toaster.service';

@Component({
    selector: 'contacts-screen',
    templateUrl: './index.screen.html',
    animations: [
        trigger('fade', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate(500, style({ opacity: 1 })),
            ]),
            transition('* => void', [animate(500, style({ opacity: 0 }))]),
        ]),
    ],
})
export class ContactsIndexScreen {
    list = Array.from({ length: 5 }, (e, id) => ({
        id,
        isChecked: false,
    }));
    isMultiSelected!: boolean;
    constructor(
        private _common: CommonService,
        private _layout: LayoutService,
        private _toastr: ToastService
    ) {
        this._common.setTitle('Dashboard');
        this._toastr.warning('Index Contacts Open');
        this._layout.numberOfCardSelected.subscribe((count) => {
            if (count) {
                this.isMultiSelected = true;
            } else {
                this.isMultiSelected = false;
            }
        });
    }

    onCheck({ id, isChecked }: { id: number; isChecked: boolean }): void {
        // console.log(id, isChecked);
        // const clickedItem = this.list[id];
        // clickedItem.isChecked = isChecked;
        // console.log(this.list);
    }

    onMultipleDelete(): void {
        // const originalLength = this.list.length;
        // this.list = this.list.filter((e) => !e.isChecked);
        // console.log(this.list);
        // const afterDelete = this.list.length;
        // this._layout.numberOfCardSelected.next(
        //     this._layout.numberOfCardSelected.value -
        //         (originalLength - afterDelete)
        // );
        // console.log(this._layout.numberOfCardSelected.value);
    }
}
