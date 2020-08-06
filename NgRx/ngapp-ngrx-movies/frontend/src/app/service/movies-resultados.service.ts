import {Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie, IMoviePayload } from '../model/movie.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { IResponse } from '../model/response.mode';

@Injectable()
export class MoviesResultadosService {

    constructor(
        private readonly httpClient: HttpClient
    ) {}

    findMovie(): Observable<Array<Movie>> {
        return this.httpClient
        .get(
            environment.urlMovies
        )
        .pipe(
            map((resp: IResponse<IMoviePayload>) => {
                const movies = new Array<Movie>();
                if (resp && resp._embedded && resp._embedded.movies) {
                    for (const object of resp._embedded.movies) {
                        movies.push(new Movie(object));
                    }
                }
                return movies;
            })
        );
    }

    findMovieByName(name: string): Observable<Array<Movie>> {
        const params = new HttpParams().set('name', name);
        return this.httpClient
        .get(
            environment.urlMoviesFindByName,
            { params }
        )
        .pipe(
            map((resp: IResponse<IMoviePayload>) => {
                const movies = new Array<Movie>();
                if (resp && resp._embedded && resp._embedded.movies) {
                    for (const object of resp._embedded.movies) {
                        movies.push(new Movie(object));
                    }
                }
                return movies;
            })
        );
    }

    findMovieByYear(year: string): Observable<Array<Movie>> {
        const params = new HttpParams().set('year', year);
        return this.httpClient
        .get(
            environment.urlMoviesFindByYear,
            { params }
        )
        .pipe(
            map((resp: IResponse<IMoviePayload>) => {
                const movies = new Array<Movie>();
                if (resp && resp._embedded && resp._embedded.movies) {
                    for (const object of resp._embedded.movies) {
                        movies.push(new Movie(object));
                    }
                }
                return movies;
            })
        );
    }

    findMovieByGenderName(name: string): Observable<Array<Movie>> {
        const params = new HttpParams().set('name', name);
        return this.httpClient
        .get(
            environment.urlMoviesFindByGender,
            { params }
        )
        .pipe(
            map((resp: IResponse<IMoviePayload>) => {
                const movies = new Array<Movie>();
                if (resp && resp._embedded && resp._embedded.movies) {
                    for (const object of resp._embedded.movies) {
                        movies.push(new Movie(object));
                    }
                }
                return movies;
            })
        );
    }


}
