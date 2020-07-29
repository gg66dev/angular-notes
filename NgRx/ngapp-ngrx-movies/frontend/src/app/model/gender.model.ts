

export interface IGender {
    name: string;
    _links: any;
}

export interface IGenderPayload {
    genders: Array<IGender>;
}

export class Gender {
    name: string;

    constructor(obj?: IGender) {
        if (!obj) {
            return;
        }
        this.name = obj.name;
    }
}
