import { Component, OnInit } from '@angular/core';

import { RegistrationService, IRegistration } from '../service/registration.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    RegistrationService
  ]
})
export class RegisterComponent implements OnInit {

  public userData: IRegistration = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: ''
  };

  constructor(private _registrationService: RegistrationService) { }

  ngOnInit() {
  }

  doRegister(form) {
    if (form && form.valid) {
      console.log(form.value);
      this._registrationService.signUp(this.userData).then(() => {
        
        console.log("SO FAR SO GOOD");


      }).catch((err: Error) => {
        alert('Sign-up error');
        console.log(err);
      });
    }
  }

}
