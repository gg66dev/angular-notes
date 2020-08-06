import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../../../model/movie.model';

import { MoviesResultadosService } from '../../../service/movies-resultados.service';
import { SearchParams } from 'src/app/model/search-params.model';

@Component({
  selector: 'app-movies-resultados',
  templateUrl: './movies-resultados.component.html',
  styleUrls: ['./movies-resultados.component.scss']
})
export class MoviesResultadosComponent implements OnInit {

  @Input()
  set searchParam(searchParam: SearchParams) {
    if (!searchParam) {
      return;
    }
    if (searchParam.name) {
      this.movieResultadosService.findMovieByName(searchParam.name)
      .subscribe(
        (res) => {
          this.movies = res;
        },
        (err) => {
          console.log(err);
        }
      );
    } else if (searchParam.year) {
      this.movieResultadosService.findMovieByYear(searchParam.year.toString())
      .subscribe(
        (res) => {
          this.movies = res;
        },
        (err) => {
          console.log(err);
        }
      );

    } else if (searchParam.gender) {
      this.movieResultadosService.findMovieByGenderName(searchParam.gender)
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
