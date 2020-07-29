import {Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender, IGenderPayload } from '../model/gender.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IResponse } from '../model/response.mode';
import { map } from 'rxjs/operators';

@Injectable()
export class MoviesBuscadorService {

    constructor(
        private readonly httpClient: HttpClient
    ) {}

    findOptionsGenders(): Observable<Array<Gender>> {
        return this.httpClient
        .get(
            environment.urlGenders
        )
        .pipe(
            map((resp: IResponse<IGenderPayload>) => {
                const genders = new Array<Gender>();
                if (resp && resp._embedded && resp._embedded.genders) {
                    for (const object of resp._embedded.genders) {
                        genders.push(new Gender(object));
                    }
                }
                return genders;
            })
        );
    }

}
