import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { UsingReactiveFormsComponent } from './using-reactive-forms.component';

@NgModule({
declarations: [
    UsingReactiveFormsComponent
],
imports: [
    BrowserModule,
    ReactiveFormsModule
]
})
export class ExReactiveFormsModule {
}
