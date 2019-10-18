import { Injectable } from '@angular/core';

import { CognitoUtilsService } from './cognito-utils.service';

import * as AWS from 'aws-sdk';


@Injectable()
export class GlobalStateService {

    // this needs to be a variable in order to support two-way binding,
    // to refresh the Angular2 templates when this value changes
    public userId = '';
    public id = undefined;

    constructor(
        private _cognitoUtilsService: CognitoUtilsService
    ){
        this.id = new Date().getTime();
        this.loadUserId();
    }

    getUserId(): string {
        return this._cognitoUtilsService.getUserId();
    }

    loadUserId() : void {
        this.userId = this.getUserId();
    }

    logout() : Promise<void> {
        let promise: Promise<void> = new Promise<void>((resolve, reject) => {

            this._cognitoUtilsService.getCognitoUser().signOut();
            (AWS.config.credentials as AWS.CognitoIdentityCredentials).clearCachedId();
            this.userId = '';
            resolve();
        });
        return promise;
      }

}