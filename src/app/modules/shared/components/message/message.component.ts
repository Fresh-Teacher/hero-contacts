import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fadeInOut } from '../../animations/shared.animations';

@Component({
    selector: 'message',
    templateUrl: './message.component.html',
    animations: [fadeInOut],
})
export class MessageComponent {
    @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() message: string;
    constructor() {}
    onDelete(): void {
        this.onClick.emit(true);
    }
}
