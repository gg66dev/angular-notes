import { Injectable } from '@angular/core';

import { CognitoUtilsService } from './cognito-utils.service';


@Injectable()
export class GlobalStateService {

    // this needs to be a variable in order to support two-way binding,
    // to refresh the Angular2 templates when this value changes
    public userId = '';

    constructor(
        private _cognitoUtilsService: CognitoUtilsService
    ){}

    getUserId(): string {
        return this._cognitoUtilsService.getUserId();
      }

}