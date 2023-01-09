import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { TitleService } from 'src/app/services/title/title.service';
import { LayoutService } from '../services/layout.service';

@Component({
    selector: 'dashboard-screeen',
    templateUrl: './index.screen.html',
    styleUrls: ['./index.screen.scss'],
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
export class DashboardScreen {
    list = Array.from({ length: 5 }, (e, id) => ({
        id,
        isChecked: false,
    }));
    isMultiSelected!: boolean;
    constructor(private _title: TitleService, private _layout: LayoutService) {
        this._title.setTitle('Dashboard');
        this._layout.numberOfCardSelected.subscribe((count) => {
            if (count) {
                this.isMultiSelected = true;
            } else {
                this.isMultiSelected = false;
            }
        });
        console.log(navigator.platform);
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
