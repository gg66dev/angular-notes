import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExComponentModule } from './ex-component/ex-component.module';
import { ExServiceModule } from './ex-service/ex-service.module';
import { ExDataBindingModule } from './ex-data-binding/ex-data-bining.module';
import { ExDirectivesModule } from './ex-directives/ex-directives.module';
import { ExObservablesModule } from './ex-observables/ex-observable.module';
import { ExFormsModule } from './ex-forms/ex-forms.module';
import { ExReactiveFormsModule } from './ex-reactive-forms/ex-reactive-forms.module';
import { ExHttpModule } from './ex-http/ex-http.module';
import { ExRoutesModule } from './ex-routes/ex-routes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExComponentModule,
    ExServiceModule,
    ExDataBindingModule,
    ExDirectivesModule,
    ExObservablesModule,
    ExFormsModule,
    ExReactiveFormsModule,
    ExHttpModule,
    ExRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
