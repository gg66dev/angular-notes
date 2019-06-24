import { Component } from '@angular/core';

import { ParentValue } from './ParentValue';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentValue: ParentValue;
  parentCount = 20;

  constructor() {
    this.parentValue = new ParentValue();
    this.parentValue.myIntValue = 1;
    this.parentValue.myStrValue = 'hello';
  }

  updateValue(event: number) {
    this.parentCount -= event;
  }
}
