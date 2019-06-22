import { Component } from '@angular/core';


@Component({
  selector: 'app-directives',
  templateUrl: './using-directives.component.html',
  styleUrls: ['./using-directives.component.css']
})
export class UsingDirectivesComponent {
    display = true;
    myList = ['item1', 'item2', 'item3'];
    value = 'value1';

    getInlineStyles(length) {
      return {
        'color': length > 3 ? 'red' : 'green',
        'text-decoration': length > 3 ? 'underline' : 'none'
      };
    }

    getClasses(length) {
      return {
        red: length > 3,
        bolder: length > 3
      };
    }

  }
