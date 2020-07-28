import {Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie, IMovie } from '../model/movie.model';
import { environment } from '../../environments/environment';


@Injectable()
export class MoviesDetalleService {

    constructor(
        private readonly httpClient: HttpClient
    ) {
    }

    findMovie(id: number): Observable<Movie> {
        return this.httpClient
        .get(
            `${environment.urlMovies}\\${id}`
        )
        .pipe(
            map((resp: IMovie) => {
                const movies = new Array<Movie>();
                if (resp) {
                    return new Movie(resp);
                }
                return undefined;
            })
        );
    }
}
