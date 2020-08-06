import { Component, OnInit } from '@angular/core';
import { SearchParams } from '../../../model/search-params.model';

@Component({
  selector: 'app-movies-listado',
  templateUrl: './movies-listado.component.html',
  styleUrls: ['./movies-listado.component.scss']
})
export class MoviesListadoComponent implements OnInit {

  searchParam: SearchParams;

  constructor() { }

  ngOnInit() {
  }

  onSearchEvent(searchParam: SearchParams) {
    this.searchParam = searchParam;
    console.log(searchParam);
  }

}
