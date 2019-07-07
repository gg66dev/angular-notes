import { AbstractControl } from '@angular/forms';


export class MyValidators {
    static startWithG(control: AbstractControl) {
        if (MyValidators.isEmptyValue(control.value)) {
            return null;
        }
        if (control.value[0] !== 'G' && control.value[0] !== 'g') {
            return { 'startWithG': true };
        }
        return null;
    }

    static isEmptyValue (value) {
        return value == null || typeof value === 'string' && value.length === 0;
    }
}