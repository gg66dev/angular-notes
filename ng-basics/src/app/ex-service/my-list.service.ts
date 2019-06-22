import { Injectable } from '@angular/core';

@Injectable()
export class MyListService {
    values(): string[]{
        return ['Value1', 'Value2', 'Value3'];
    }
}
