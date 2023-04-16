import { CardStatus, ContactsQueryParams } from './../../model/contacts.model';
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
    @Output() onCheck = new EventEmitter<CardStatus>();
    subsriptions: Subscription[] = [];

    isMultiSelected = false;
    selectedIds: string[];
    constructor(
        private _layout: LayoutService,
        private _contactSer: ContactService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _auth: AuthService
    ) {
        this.subsriptions.push(
            this._layout.selectedCards.subscribe((cards) => {
                if (cards.length >= 1) {
                    this.isMultiSelected = true;
                } else {
                    this.isMultiSelected = false;
                }
            }),

            this._auth.user.subscribe((user) => (this.user = user))
        );
    }

    onMultiSelect(event: Event): void {
        event.stopPropagation();
        this.onCheck.emit({
            id: (event.target as HTMLInputElement).value,
            checked: (event.target as HTMLInputElement).checked,
        } as CardStatus);
    }
    detailed(id: string, event: Event) {
        event.stopPropagation();
        this._router.navigate(['view'], {
            queryParams: {
                user: this.user.uid,
                id,
            },
            relativeTo: this._route,
        });
    }

    edit(id: string, event: Event) {
        event.stopPropagation();
        this._router.navigate(['details'], {
            relativeTo: this._route,
            queryParams: {
                [ContactsQueryParams.MODE]: ContactsQueryParams.EDIT,
                user: this.user.uid,
                id,
            },
            queryParamsHandling: 'merge',
        });
    }

    async delete(id: string, event: Event): Promise<void> {
        event.stopPropagation();
        await this._contactSer.deleteContact(id);
    }
    ngOnDestroy(): void {
        this.subsriptions.forEach((e) => e.unsubscribe());
    }
}
