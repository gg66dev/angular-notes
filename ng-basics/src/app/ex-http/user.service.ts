import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

baseUrl = 'https://jsonplaceholder.typicode.com/users';

 constructor(private httpClient: HttpClient) {}

 getUsersData(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(this.baseUrl);
  }
}
