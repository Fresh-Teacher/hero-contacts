import { LayoutService } from 'src/app/modules/dashboard/services/layout.service';
import { CommonService } from 'src/app/services/common.service';
import { Component } from '@angular/core';
import { ToastService } from 'src/app/services/toaster.service';
import { fadeInOut } from 'src/app/modules/shared/animations/shared.animations';
import { ContactFormComponent } from '../../components/form/form.component';
import { UserForm } from 'src/app/modules/shared/form/form.component';

@Component({
    selector: 'contacts-screen',
    templateUrl: './index.screen.html',
    animations: [fadeInOut],
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
        this._common.setTitle('Contacts - Dashboard');
        this._layout.numberOfCardSelected.subscribe((count) => {
            if (count) {
                this.isMultiSelected = true;
            } else {
                this.isMultiSelected = false;
            }
        });
    }

    addModal(): void {}

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
