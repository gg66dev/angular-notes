import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentComponent } from './ex-component/parent.component';
import { UsingServiceComponent } from './ex-service/using-service.component';
import { DataBindingComponent } from './ex-data-binding/data-bindig.component';
import { UsingDirectivesComponent } from './ex-directives/using-directives.component';

const routes: Routes = [
  { path: 'ex-component', component: ParentComponent},
  { path: 'ex-service', component: UsingServiceComponent },
  { path: 'ex-data-binding', component: DataBindingComponent },
  { path: 'ex-directives', component: UsingDirectivesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
