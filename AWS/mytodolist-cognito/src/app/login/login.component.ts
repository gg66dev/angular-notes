import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { LoginService, ILogin } from '../service/login.service';
import { GlobalStateService } from '../service/global-state.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    LoginService
  ]
})
export class LoginComponent implements OnInit {

  public userData: ILogin = {
    username: "",
    password: ""
  };

  constructor(
    private _loginService: LoginService,
    private _globalStateService: GlobalStateService,
    private _router: Router
    ) { }

  ngOnInit() {
  }

  doLogin(form) {
    if (form && form.valid) {
      this.login();
    }
  }


    // return a LoginStatus
    login(): void {
      
      this._loginService.signIn(this.userData)
      .then(() => {
        // Login was successful
        alert("login success");
        this._globalStateService.loadUserId();
        console.log(this._globalStateService.userId);
        console.log(this._globalStateService.id);
        this._router.navigateByUrl('/notes');
      }).catch((err: Error): void => {
        alert(`login error ${err.message}`);
      });

    }



}
