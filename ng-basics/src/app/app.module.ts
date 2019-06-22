import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExComponentModule } from './ex-component/ex-component.module';
import { ExServiceModule } from './ex-service/ex-service.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExComponentModule,
    ExServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
