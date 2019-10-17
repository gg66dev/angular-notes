import { Component, OnInit } from '@angular/core';

import { RegistrationService } from '../service/registration.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
  providers: [
    RegistrationService
  ]
})
export class ConfirmationComponent implements OnInit {

  public submitted: boolean = false;

  public registrationCode = {
    code: undefined
  };

  constructor(
    private _registrationService: RegistrationService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  doConfirmation(form) {
    this.submitted = true;
    console.log(form.value);
    if (form && form.valid) {
      this._registrationService.confirmSignUp(this.registrationCode.code.toString())
      .then(() => {
        this.showAlert();
        this._router.navigateByUrl('/login');
      }).catch((err: Error) => {
        console.error(err);
        this.showAlert(err);
      });      
    }
  }

  showAlert(err?: Error) {
    if (err) {
      alert(err.message);
    } else {      
      alert(`You are now successfully registered! You can now sign-in using your username/password.`);
    }  
  }

}
