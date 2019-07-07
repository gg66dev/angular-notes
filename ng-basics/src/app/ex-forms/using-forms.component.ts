import { Component } from '@angular/core';

interface MyForm {
    message: string;
}

@Component({
  selector: 'app-observable',
  templateUrl: './using-forms.component.html',
})
export class UsingFormsComponent {

    myForm: MyForm = {
        message: 'write here!'
    };

    onSubmit(formValue) {
        console.log(formValue);
    }
}
