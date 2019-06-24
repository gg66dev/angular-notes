import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentComponent } from './parent.component';
import { LeftComponent } from './left.component';
import { RightComponent } from './right.component';
import { UsingInputComponent } from './using-input.component';
import { UsingOutputComponent } from './using-output.component';

@NgModule({
declarations: [
    LeftComponent,
    RightComponent,
    ParentComponent,
    UsingInputComponent,
    UsingOutputComponent
],
imports: [
    CommonModule
]
})
export  class  ExComponentModule {
}
