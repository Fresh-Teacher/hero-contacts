import { Contact, Contactstatus } from './../../model/contacts.model';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CommonService } from 'src/app/services/common.service';
import {
    FormArray,
    FormBuilder,
    FormGroup,
    Validators,
    FormControl,
    AbstractControl,
} from '@angular/forms';
import { fadeInOut } from 'src/app/modules/shared/animations/shared.animations';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contacts.service';
import { ToastService } from 'src/app/services/toaster.service';

@Component({
    selector: 'add-contact',
    templateUrl: './add-contact.page.html',
    styleUrls: ['./add-contact.page.scss'],
    animations: [fadeInOut],
})
export class AddContactPage implements OnInit {
    addContactForm: FormGroup;

    userId: string;
    statuses: Contactstatus[] = ['active', 'inactive'];
    constructor(
        private _common: CommonService,
        private _location: Location,
        private _auth: AuthService,
        private _fb: FormBuilder,
        private _toastr: ToastService,
        private _router: Router,
        private _contactService: ContactService
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
                                new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')
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

    ngOnInit(): void {
        this._auth.user.subscribe(
            (user) => (this.userId = `${user.email}+${user.uid}`)
        );
    }

    get contacts(): FormArray {
        return this.addContactForm.get('contacts') as FormArray;
    }

    async submit(): Promise<void> {
        try {
            await this._contactService.addContact(
                this.addContactForm.value as Contact
            );
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
                    Validators.pattern(
                        new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')
                    ),
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
