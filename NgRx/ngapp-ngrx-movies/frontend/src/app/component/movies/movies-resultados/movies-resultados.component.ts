import { Component, OnInit } from '@angular/core';

import { Movie } from '../../../model/movie.model';

import { MoviesResultadosService } from '../../../service/movies-resultados.service';

@Component({
  selector: 'app-movies-resultados',
  templateUrl: './movies-resultados.component.html',
  styleUrls: ['./movies-resultados.component.scss']
})
export class MoviesResultadosComponent implements OnInit {

  movies = new Array<Movie>();

  constructor(
    private readonly movieResultadosService: MoviesResultadosService
  ) { }

  ngOnInit() {
    this.movieResultadosService.findMovie()
      .subscribe(
        (res) => {
          this.movies = res;
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
