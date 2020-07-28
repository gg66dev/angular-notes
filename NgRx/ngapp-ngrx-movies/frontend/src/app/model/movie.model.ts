
export interface IGender {
    name: string;
}

export interface IMovie {
    id: number;
    year: string;
    name: string;
    director: string;
    gender: IGender;
    _links: any;
}

export interface IMoviePayload {
    movies: Array<IMovie>;
}

export class Movie {
    id: number;
    year: string;
    name: string;
    director: string;
    gender: string;

    constructor(obj?: IMovie) {
        if (!obj) {
            return;
        }
        this.id = obj.id;
        this.year = obj.year;
        this.name = obj.name;
        this.director = obj.director;
        this.gender = (obj.gender) ? obj.gender.name : undefined;
    }
}
