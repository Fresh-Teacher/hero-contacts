import { ContactsQueryParams } from './../../model/contacts.model';
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
    @Output() onCheck = new EventEmitter<string[]>();
    subsriptions: Subscription[] = [];

    isMultiSelected = false;
    selectedIds: string[] = [];
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
        console.log(event);
        event.stopPropagation();
        const id = event.target.value;
        if (event.target.checked) {
            if (!this.selectedIds.includes(id)) {
                this.selectedIds.push(id);
            }
            this._layout.numberOfCardSelected.next(
                this._layout.numberOfCardSelected.value + 1
            );
        } else {
            const index = this.selectedIds.indexOf(id);
            if (index !== -1) {
                this.selectedIds.splice(index, 1);
            }
            this._layout.numberOfCardSelected.next(
                this._layout.numberOfCardSelected.value - 1
            );
        }
        this.onCheck.emit([...this.selectedIds]);
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
        console.log('Route');
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
