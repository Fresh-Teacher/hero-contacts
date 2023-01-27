import { Contactstatus } from './../../model/contacts.model';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CommonService } from 'src/app/services/common.service';
import {
    FormArray,
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl,
} from '@angular/forms';
import { fadeInOut } from 'src/app/modules/shared/animations/shared.animations';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toaster.service';

@Component({
    selector: 'add-contact',
    templateUrl: './add-contact.page.html',
    styleUrls: ['./add-contact.page.scss'],
    animations: [fadeInOut],
})
export class AddContactPage {
    addContactForm: FormGroup;
    statuses: Contactstatus[] = ['active', 'inactive'];
    constructor(
        private _common: CommonService,
        private _location: Location,
        private _fb: FormBuilder,
        private _toastr: ToastService,
        private _router: Router
    ) {
        this._common.setTitle('Add');
        this.addContactForm = this._fb.group({
            name: this._fb.control('', [Validators.required]),
            contacts: this._fb.array([
                this._fb.group({
                    email: [
                        '',
                        [
                            Validators.required,
                            Validators.pattern(
                                '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'
                            ),
                        ],
                    ],
                    phone: [
                        '',
                        [Validators.required, Validators.pattern('[0-9]{10}')],
                    ],
                }),
            ]),
            status: this._fb.control('active'),
            description: this._fb.control('', [Validators.required]),
        });
    }

    get contacts(): FormArray {
        return this.addContactForm.get('contacts') as FormArray;
    }

    async submit(): Promise<void> {
        try {
            this._router.navigate(['dashboard/contacts']);
        } catch (err) {
            this._toastr.error(err.message);
        } finally {
            this.addContactForm.reset();
        }
    }

    addPhone(): void {
        const contact = this._fb.group({
            email: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),
                ],
            ],
            phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
        });
        this.contacts.push(contact);
    }

    removePhone(i: number): void {
        this.contacts.removeAt(i);
    }

    get name(): AbstractControl {
        return this.addContactForm.get('name');
    }

    get phoneNumber(): AbstractControl {
        return this.addContactForm.get('phone');
    }

    get description(): AbstractControl {
        return this.addContactForm.get('description');
    }

    back(): void {
        this._location.back();
    }
}
