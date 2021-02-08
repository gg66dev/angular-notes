import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotesComponent } from './notes/notes.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

import { CognitoUtilsService } from './service/cognito-utils.service';
import { LocalStorageService } from './service/local-storage.service';
import { GlobalStateService } from './service/global-state.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotesComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CognitoUtilsService,
    LocalStorageService,
    GlobalStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
