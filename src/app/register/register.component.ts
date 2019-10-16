import { Component, OnInit } from '@angular/core';

import { RegistrationService, IRegistration } from '../service/registration.service';
import {Router} from '@angular/router';


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

  constructor(
    private _registrationService: RegistrationService,
    private _router: Router
    ) { }

  ngOnInit() {
  }

  doRegister(form) {
    if (form && form.valid) {
      console.log(form.value);
      this._registrationService.signUp(this.userData).then(() => {
          this._router.navigateByUrl('/confirmation');
      }).catch((err: Error) => {
        alert('Sign-up error');
        console.log(err);
      });
    }
  }

}
