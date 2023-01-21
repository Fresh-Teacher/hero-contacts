import { FormControl, ValidatorFn } from '@angular/forms';
import { FormBaseValidatorTypes, FormControlTypes } from './form.enums';

export type FormBaseValidatorValue = number;

export interface FormValidatorMetaData {
    key: FormBaseValidatorTypes;
    value: FormBaseValidatorValue;
    errorMessage: string;
    errorKey: string;
}

export interface FormAdditionalValidator {
    validatorFn: ValidatorFn;
    errorKey: string;
}

export interface FormControlData {
    label: string;
    value: string;
    controlName: string;
    type: FormControlTypes;
    validators: FormValidatorMetaData[];
    additionalValidators: FormAdditionalValidator[];
    panelClasses: string[];
}

export interface FormConfiguration {
    controls: FormControlData[];
}

/**
 * Generating Dummy Form Config
 */
export const getFormConfiguration = (): FormConfiguration => {
    return <FormConfiguration>{
        controls: [
            {
                label: 'First Name',
                value: '',
                controlName: 'firstName',
                type: 'text',
                validators: [
                    {
                        key: FormBaseValidatorTypes.REQUIRE,
                        errorMessage: 'first name is required',
                        errorKey: 'required',
                    },
                ],
                additionalValidators: [
                    {
                        validatorFn: 'mycustomValidator',
                        errorKey: 'validatorkey',
                    },
                ],
                panelClasses: ['btn', 'btn-ghost'],
            },
            {
                label: 'Phone Number',
                value: '7977166580',
                controlName: 'phoneNumber',
                type: 'number',
                validators: [
                    {
                        key: FormBaseValidatorTypes.REQUIRE,
                        value: true,
                        errorMessage: 'Phone Number is required',
                        errorKey: 'required',
                    },
                    {
                        key: FormBaseValidatorTypes.MINLENGTH,
                        value: 10,
                        errorMessage: 'Phone number must be of 10 digits',
                        errorKey: 'minlength',
                    },
                ],
                additionalValidators: [
                    {
                        validatorFn: noWhitespaceValidator,
                        errorKey: 'whitespace',
                    },
                ],
                panelClasses: ['btn', 'btn-ghost'],
            },
        ],
    };
};

const noWhitespaceValidator = (control: FormControl) => {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
};
