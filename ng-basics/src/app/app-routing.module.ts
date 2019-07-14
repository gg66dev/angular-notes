import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentComponent } from './ex-component/parent.component';
import { UsingServiceComponent } from './ex-service/using-service.component';
import { DataBindingComponent } from './ex-data-binding/data-bindig.component';
import { UsingDirectivesComponent } from './ex-directives/using-directives.component';
import { UsingObservablesComponent } from './ex-observables/using-observables.component';
import { UsingFormsComponent } from './ex-forms/using-forms.component';
import { UsingReactiveFormsComponent } from './ex-reactive-forms/using-reactive-forms.component';
import { UsingHttpComponent } from './ex-http/using-http.component';
import { UsingRoutesComponent } from './ex-routes/using-routes.component';
import { UsingRoutesDefaultComponent } from './ex-routes/using-routes-default.component';
import { UsingRoutesSecondComponent } from './ex-routes/using-routes-second.component';
import { UsingRoutesThirdComponent } from './ex-routes/using-routes-third.component';

const routes: Routes = [
  { path: 'ex-component', component: ParentComponent},
  { path: 'ex-service', component: UsingServiceComponent },
  { path: 'ex-data-binding', component: DataBindingComponent },
  { path: 'ex-directives', component: UsingDirectivesComponent },
  { path: 'ex-observables', component: UsingObservablesComponent },
  { path: 'ex-forms', component: UsingFormsComponent },
  { path: 'ex-reactive-forms', component: UsingReactiveFormsComponent },
  { path: 'ex-http', component: UsingHttpComponent },
  { path: 'ex-routes', component: UsingRoutesComponent, children: [
      // children component routes
      { path: ':key', component: UsingRoutesDefaultComponent },
      { path: 'second', component: UsingRoutesSecondComponent, outlet: 'secundary' },
      { path: 'third', component: UsingRoutesThirdComponent, outlet: 'secundary' }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
