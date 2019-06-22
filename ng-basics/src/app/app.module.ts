import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExComponentModule } from './ex-component/ex-component.module';
import { ExServiceModule } from './ex-service/ex-service.module';
import { ExDataBindingModule } from './ex-data-binding/ex-data-bining.module';
import { ExDirectivesModule } from './ex-directives/ex-directives.module';

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
    ExDirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
