import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsingHttpComponent } from './using-http.component';

import { UserService } from './user.service';


@NgModule({
declarations: [
    UsingHttpComponent
],
imports: [
    CommonModule,
    HttpClientModule
],
providers: [UserService]
})
export class ExHttpModule {
}
