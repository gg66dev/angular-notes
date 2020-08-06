import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MoviesBuscadorService } from 'src/app/service/movies-buscador.service';
import { Gender } from '../../../model/gender.model';
import { SearchParams } from '../../../model/search-params.model';

@Component({
  selector: 'app-movies-buscador',
  templateUrl: './movies-buscador.component.html',
  styleUrls: ['./movies-buscador.component.scss']
})
export class MoviesBuscadorComponent implements OnInit {

  movieName;
  movieGenderName;
  movieYear;

  years = new Array<number>();

  genders = new Array<Gender>();

  @Output()
  searchEvent = new EventEmitter<SearchParams>();

  constructor(
    private readonly movieBuscadorService: MoviesBuscadorService
  ) { }

  ngOnInit() {
    this.years = Array(120).fill(1).map((x, i) => 2020 - i);
    this.movieBuscadorService.findOptionsGenders()
      .subscribe(
        (res) => {
          console.log(res);
          this.genders = res;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  doSearch() {
    this.searchEvent.emit({
      name: this.movieName,
      year: this.movieYear,
      gender: this.movieGenderName
    });
  }

}
