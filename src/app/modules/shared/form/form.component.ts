import { NetworkManagerService } from 'src/app/services/network-manager.service';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { fadeInOut } from '../animations/shared.animations';
import { FormBaseValidatorTypes, FormControlTypes } from './types/form.enums';
import { FormControlData, getFormConfiguration } from './types/form.types';

@Component({
    selector: 'user-form',
    templateUrl: './form.component.html',
    animations: [fadeInOut],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserForm {
    @Input() formConfiguration = getFormConfiguration();

    loading = false;
    FormControlTypes = FormControlTypes;

    userForm: FormGroup;

    constructor(
        private _fb: FormBuilder,
        private _dialogueRef: MatDialogRef<UserForm>,
        private _network: NetworkManagerService
    ) {
        this.userForm = this._fb.group({});
        this.createForm(this.formConfiguration.controls);
        console.log(this.userForm);
        this.userForm.valueChanges.subscribe((data) => this.userForm.errors);
    }

    createForm(formConfig: FormControlData[]) {
        formConfig.forEach((control: FormControlData) => {
            const validators = [];
            for (let validator of control.validators) {
                switch (validator.key) {
                    case FormBaseValidatorTypes.REQUIRE:
                        validators.push(Validators.required);
                        break;
                    case FormBaseValidatorTypes.EMAIL:
                        validators.push(Validators.email);
                        break;
                    case FormBaseValidatorTypes.MINLENGTH:
                        validators.push(Validators.minLength(validator.value));
                        break;
                }
            }
            console.log(control.controlName, validators);
            this.userForm.addControl(
                control.controlName,
                new FormControl(control.value, [...validators])
            );
        });
    }

    onSubmit(): void {
        console.log(this.userForm.get('firstName'));
        console.log(this.userForm);
    }

    close(): void {
        this._dialogueRef.close();
    }
}
