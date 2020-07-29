import { Component, OnInit } from '@angular/core';
import { MoviesBuscadorService } from 'src/app/service/movies-buscador.service';
import { Gender } from '../../../model/gender.model';

@Component({
  selector: 'app-movies-buscador',
  templateUrl: './movies-buscador.component.html',
  styleUrls: ['./movies-buscador.component.scss']
})
export class MoviesBuscadorComponent implements OnInit {

  years = new Array<number>();

  genders = new Array<Gender>();

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

}
