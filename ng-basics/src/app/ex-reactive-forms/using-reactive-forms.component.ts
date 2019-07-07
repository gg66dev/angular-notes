import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MyValidators } from './my-validators';



@Component({
  selector: 'app-reactive-forms',
  templateUrl: './using-reactive-forms.component.html',
})
export class UsingReactiveFormsComponent implements OnInit {
    EMAIL_REGEX = "[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*";

    registrationForm: FormGroup;
    registrationForm2: FormGroup;
    registrationForm3: FormGroup;

    constructor(public formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.registrationForm = new FormGroup({
            firstName: new FormControl('Keith', Validators.required),
            lastName: new FormControl(''),
            email: new FormControl('',[Validators.required, Validators.pattern(this.EMAIL_REGEX)])
        });

        /**
         * Using FormBuilder
         */
        this.registrationForm2 = this.formBuilder.group({
            firstName: ['Keith', Validators.required ],
            lastName: [''],
            email: ['',  [Validators.required, Validators.pattern(this.EMAIL_REGEX)]]
        });

        /**
         * custom validator
         */
        this.registrationForm3 = this.formBuilder.group({
            firstName: ['', [Validators.required, MyValidators.startWithG]]
        });
    }

    onSubmit(formValue) {
        console.log(formValue);
        console.log(this.registrationForm.value);
    }

    onSubmit2(formValue) {
        console.log(formValue);
        console.log(this.registrationForm2.value);
    }
}
