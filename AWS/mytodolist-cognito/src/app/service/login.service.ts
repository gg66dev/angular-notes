import { Injectable } from '@angular/core';

import * as AWSCognito from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk';

import { UserState } from '../model/UserState'
import { CognitoUtilsService } from  '../service/cognito-utils.service';
import { LocalStorageService } from '../service/local-storage.service';


export interface ILogin {
    username?: string;
    password?: string;
}

@Injectable({
providedIn: 'root'
})
export class LoginService {

    private _userTokens = {
        accessToken: undefined,
        idToken: undefined,
        refreshToken: undefined
    };

    constructor(
        private _cognitoUtilsServices: CognitoUtilsService,
        private _localStorageServices: LocalStorageService
    ) { }

    public signIn(userLogin: ILogin): Promise<void> {
    
    let authenticationData = {
        Username: userLogin.username,
        Password: userLogin.password
    };

    let authenticationDetails = new AWSCognito.AuthenticationDetails(authenticationData);
    this._cognitoUtilsServices.setUsername(userLogin.username);
    console.log('Authenticating user ' + userLogin.username);

    let cognitoUser = this._cognitoUtilsServices.getCognitoUser();
    let _this = this;
    let promise: Promise<void> = new Promise<void>((resolve, reject) => {
        cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            console.log(result);
            _this.completeSignIn(
                    result.getAccessToken().getJwtToken(),
                    result.getIdToken().getJwtToken(),
                    result.getRefreshToken().getToken()
            ).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        },
        onFailure: function (err) {
            // Check for user not confirmed exception
            if (err.code === 'UserNotConfirmedException') {
            // Set user state to pending confirmation
                _this._cognitoUtilsServices.setUserState(UserState.PendingConfirmation);
            } else {
                _this._cognitoUtilsServices.setUserState(UserState.InvalidCredentials);
            }
            reject(err);
        }
        });
    });
    return promise;
    }

    public completeSignIn(accessToken: string, idToken: string, refreshToken: string): Promise<void> {
        let promise: Promise<void> = new Promise<void>((resolve, reject) => {
          // Save user tokens to local state
          this._userTokens.accessToken = accessToken;
          this._userTokens.idToken = idToken;
          this._userTokens.refreshToken = refreshToken;
    
          this._localStorageServices.set('userTokens.idToken', this._userTokens.idToken);
          console.log(`%cCognito User Pools Identity Token:  ${this.getIdToken()}`);
          this._localStorageServices.set('userTokens.accessToken', this._userTokens.accessToken);
          console.log(`%cCognito User Pools Access Token: ${this.getAccessToken()}`);
          this._localStorageServices.set('userTokens.refreshToken', this._userTokens.refreshToken);
          console.log(`%cCognito User Pools Refresh Token: ${this.getRefreshToken()}`);
    
          /*
          Extract the user group from the identity token.
          First, get the identity token payload and then perform a Base64 decoding
          so you can later extract the user group.
          */
          //let idTokenPayload = this._userTokens.idToken.split('.')[1];
          //let idTokenDecoded = JSON.parse(sjcl.codec.utf8String.fromBits(sjcl.codec.base64url.toBits(idTokenPayload)));
          //CognitoUtil.setUsername(idTokenDecoded["cognito:username"]);
          //let userName = idTokenDecoded["cognito:username"];
          //let userGroup = idTokenDecoded["cognito:groups"];
          //if (userGroup && userGroup.length > 0) {
          //  LocalStorage.set('userGroup', userGroup);
          //} else {
            /*
              The user group is set only for the pre-defined users. By default
              we assign them to client group.
            */
          //  userGroup = 'clientGroup';
          //  LocalStorage.set('userGroup', userGroup[0]);
          //}
         // console.log('%cCognito User Pools User Groups: ' + '%c%s belongs to group %s', Logger.LeadInStyle, "black",
         //   userName, userGroup[0]);
    
          // Set user state to authenticated
          this._cognitoUtilsServices.setUserState(UserState.SignedIn);
    
          // Read user attributes and write to console
          //console.log('%cCognito User Pools User Attributes: ', Logger.LeadInStyle, idTokenDecoded);
          // Write user profile attributes to local storage
          //LocalStorage.setObject('userProfile', idTokenDecoded);
    
          this.getAwsCredentials().then(() => {
            this._localStorageServices.set('userId', this._cognitoUtilsServices.getCognitoIdentityId());
            console.log(`%cCognito Identity ID: ${this._cognitoUtilsServices.getCognitoIdentityId()}`);
            this._localStorageServices.set('userTokens.awsAccessKeyId', AWS.config.credentials.accessKeyId);
            console.log(`%cAWS Access Key ID: ${AWS.config.credentials.accessKeyId}`);
            this._localStorageServices.set('userTokens.awsSecretAccessKey', AWS.config.credentials.secretAccessKey);
            console.log(`%cAWS Secret Access Key: ${AWS.config.credentials.secretAccessKey}`);
            this._localStorageServices.set('userTokens.awsSessionToken', AWS.config.credentials.sessionToken);
            console.log(`%cAWS Session Token: ${AWS.config.credentials.sessionToken}`);
    
            // Resolve promise if all is successful
            resolve();
          }).catch((err) => {
            reject(err);
          });
        });
        return promise;
      }

      public getAccessToken() {
        let accessToken: string = this._userTokens.accessToken;
        if (!accessToken) {
          // retrieve from Local Storage if it exists
          accessToken = this._localStorageServices.get('userTokens.accessToken');
          this._userTokens.accessToken = accessToken;
        }
        return accessToken;
      };
    
      public getIdToken() {
        let idToken: string = this._userTokens.idToken;
        if (!idToken) {
          // retrieve from Local Storage if it exists
          idToken = this._localStorageServices.get('userTokens.idToken');
          this._userTokens.idToken = idToken;
        }
        return idToken;
      };
    
      public getRefreshToken() {
        let refreshToken: string = this._userTokens.refreshToken;
        if (!refreshToken) {
          // retrieve from Local Storage if it exists
          refreshToken = this._localStorageServices.get('userTokens.refreshToken');
          this._userTokens.refreshToken = refreshToken;
        }
        return refreshToken;
      }


      public getAwsCredentials(): Promise<void> {
        let promise: Promise<void> = new Promise<void>((resolve, reject) => {
          // TODO: Integrate this method as needed into the overall module
          // Add the User's Id token to the Cognito credentials login map
          let logins = {};  
          logins['cognito-idp.' + this._cognitoUtilsServices.getRegion() + 
          '.amazonaws.com/' + this._cognitoUtilsServices.getUserPoolId()] = this._localStorageServices.get('userTokens.idToken');;
    
          // Set Cognito Identity Pool details
          AWS.config.region = this._cognitoUtilsServices.getRegion();
          AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: this._cognitoUtilsServices.getIdentityPoolId()
          });
    
          AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: this._cognitoUtilsServices.getIdentityPoolId(),
            Logins: logins
          });
    
          // Call refresh method to authenticate user and get new temp AWS credentials
          if (AWS.config.credentials.needsRefresh()) {
            AWS.config.credentials.clearCachedId();
            AWS.config.credentials.get((err) => {
              if (err) {
                reject(err);
                return;
              }
              resolve();
            });
          } else {
            AWS.config.credentials.get((err) => {
              if (err) {
                console.error(err);
                reject(err);
                return;
              }
              resolve();
            });
          }
        });
        return promise;
      }

}
    


