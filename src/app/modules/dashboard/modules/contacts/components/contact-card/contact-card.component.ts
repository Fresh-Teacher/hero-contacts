import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
} from '@angular/core';
import { User } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { LayoutService } from 'src/app/modules/dashboard/services/layout.service';
import { fadeInOut } from 'src/app/modules/shared/animations/shared.animations';
import { TStoFix } from 'src/app/types/common-types';
import { Contact } from '../../model/contacts.model';
import { ContactService } from '../../services/contacts.service';

@Component({
    selector: 'contact-card',
    templateUrl: './contact-card.component.html',
    animations: [fadeInOut],
    styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnDestroy {
    user: User;
    @Input() item: Contact;
    @Output() onCheck = new EventEmitter<{ id: number; isChecked: boolean }>();
    subsriptions: Subscription[] = [];
    isMultiSelected = false;
    constructor(
        private _layout: LayoutService,
        private _contactSer: ContactService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _auth: AuthService
    ) {
        this.subsriptions.push(
            this._layout.numberOfCardSelected.subscribe((count) => {
                if (count) {
                    this.isMultiSelected = true;
                } else {
                    this.isMultiSelected = false;
                }
            }),
            this._auth.user.subscribe((user) => (this.user = user))
        );
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
    detailed(id: string) {
        this._router.navigate(['view'], {
            queryParams: {
                user: this.user.uid,
                id,
            },
            relativeTo: this._route,
        });
    }

    async delete(id: string): Promise<void> {
        await this._contactSer.deleteContact(id);
    }
    ngOnDestroy(): void {
        this.subsriptions.forEach((e) => e.unsubscribe());
    }
}
