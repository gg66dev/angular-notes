import { Component, Input } from '@angular/core';

import {ParentValue} from './ParentValue';

@Component({
  selector: 'app-using-input',
  templateUrl: './using-input.component.html',
})
export class UsingInputComponent {
    @Input() parentValue: ParentValue;
}
