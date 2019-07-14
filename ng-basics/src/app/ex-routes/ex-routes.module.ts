import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsingRoutesComponent } from './using-routes.component';
import { UsingRoutesDefaultComponent } from './using-routes-default.component';
import { UsingRoutesSecondComponent } from './using-routes-second.component';
import { UsingRoutesThirdComponent } from './using-routes-third.component';

@NgModule({
declarations: [
    UsingRoutesComponent,
    UsingRoutesDefaultComponent,
    UsingRoutesSecondComponent,
    UsingRoutesThirdComponent
],
imports: [
    CommonModule,
    RouterModule
]
})
export  class  ExRoutesModule {
}
