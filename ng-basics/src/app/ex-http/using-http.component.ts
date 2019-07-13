import { Component } from '@angular/core';


import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-http',
  templateUrl: './using-http.component.html',
})
export class UsingHttpComponent {

  usersList: User[] = [];

  constructor(private userServices: UserService) {}

  getUsersData() {
    this.userServices.getUsersData()
      .subscribe( users => this.usersList = users);
  }
}


