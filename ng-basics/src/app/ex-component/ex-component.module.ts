import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentComponent } from './parent.component';
import { LeftComponent } from './left.component';
import { RightComponent } from './right.component';

@NgModule({
declarations: [
    LeftComponent,
    RightComponent,
    ParentComponent
],
imports: [
    CommonModule
]
})
export  class  ExComponentModule {
}
