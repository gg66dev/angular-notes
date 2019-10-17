import { Injectable } from '@angular/core';

import * as AWSCognito from 'amazon-cognito-identity-js';

import { CognitoUtilsService  } from './cognito-utils.service';

import { UserState } from '../model/UserState';


export interface IRegistration {
  username?: string;
  password?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _cognitoUtilsService: CognitoUtilsService) { }

  /** 
   * Registra un nuevo usuario
  */
  public signUp(data: IRegistration): Promise<void> {
  
    let attributeList: AWSCognito.CognitoUserAttribute[] = [];

    let dataEmail: AWSCognito.ICognitoUserAttributeData= {
      Name: 'email',
      Value: data.email
    };

    let dataGivenName: AWSCognito.ICognitoUserAttributeData = {
      Name: 'given_name',
      Value: data.firstname
    };

    let dataFamilyName: AWSCognito.ICognitoUserAttributeData = {
      Name: 'family_name',
      Value: data.lastname
    };

    let attributeEmail = new AWSCognito.CognitoUserAttribute(dataEmail);
    let attributeGivenName = new AWSCognito.CognitoUserAttribute(dataGivenName);
    let attributeFamilyName = new AWSCognito.CognitoUserAttribute(dataFamilyName);

    attributeList.push(attributeEmail);
    attributeList.push(attributeGivenName);
    attributeList.push(attributeFamilyName);


    let promise: Promise<void> = new Promise<void>((resolve, reject) => {
      this._cognitoUtilsService.getUserPool().signUp(data.username, data.password, attributeList, undefined, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        console.log('Username is ' + result.user.getUsername());
        console.log('Sign-up successful!');

        // Update user state to 'pendingConfirmation'
        this._cognitoUtilsService.setUsername(data.username);
        this._cognitoUtilsService.setUserState(UserState.PendingConfirmation);

        // Sign-up successful. Callback without error.
        resolve();
      });
    });
    return promise;
  }

  /*
  * Envia codigo de confirmacion ingresado por el usuario para terminar registro
  */
 confirmSignUp(confirmationCode: string): Promise<void> {
  let cognitoUser = this._cognitoUtilsService.getCognitoUser();
  let promise: Promise<void> = new Promise<void>((resolve, reject) => {
    cognitoUser.confirmRegistration(confirmationCode, true, (err: Error, data: any) => {
      if (err) {
        reject(err);
        return;
      }
      this._cognitoUtilsService.setUserState(UserState.SignedIn);
      resolve(data);
    });
  });
  return promise;  
 }



}
