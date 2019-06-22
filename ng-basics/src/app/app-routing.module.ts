import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentComponent } from './ex-component/parent.component';
import { UsingServiceComponent } from './ex-service/using-service.component';

const routes: Routes = [
  { path: 'ex-component', component: ParentComponent},
  { path: 'ex-service', component: UsingServiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
