import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MoviesDetalleService } from '../../../service/movies-detalle.service';
import { Movie } from 'src/app/model/movie.model';

@Component({
  selector: 'app-movies-detalle',
  templateUrl: './movies-detalle.component.html',
  styleUrls: ['./movies-detalle.component.scss']
})
export class MoviesDetalleComponent implements OnInit {

  movie = new Movie();

  constructor(
    private readonly location: Location,
    private readonly route: ActivatedRoute,
    private readonly movieDetalleService: MoviesDetalleService
  ) { }

  ngOnInit() {
    const  id = this.route.snapshot.params.id;
    if (id) {
      this.movieDetalleService.findMovie(id)
        .subscribe(
          (res) => {
            this.movie = res;
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {}

  back() {
    this.location.back();
  }


}
