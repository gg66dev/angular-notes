import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './component/movies/movies.component';
import { MoviesListadoComponent } from './component/movies/movies-listado/movies-listado.component';
import { MoviesDetalleComponent } from './component/movies/movies-detalle/movies-detalle.component';


const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      {
        path: '',
        component: MoviesListadoComponent,
      },
      {
        path: 'detalle/:id',
        component: MoviesDetalleComponent,
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
