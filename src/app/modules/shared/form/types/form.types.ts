import { ValidatorFn } from '@angular/forms';

export interface FormValidatorMetaData {
    required: boolean;
    errorMessage: string;
    errorKey: string;
    minLength?: number;
}

export interface FormAdditionalValidator {
    validatorFn: ValidatorFn;
    errorKey: string;
}

export interface FormControlData {
    label: string;
    value: string;
    controlName: string;
    type: string;
    validators: FormValidatorMetaData[];
    additionalValidators: FormAdditionalValidator[];
    panelClasses: string[];
}

export interface FormConfiguration {
    controls: Control[];
}
