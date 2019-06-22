import { Component } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {

    message = 'this is my message';
    otherMessage = 'my other message';
    typeNumeric = 'number';

    showMessage(onClickEvent) {
        alert(this.message);
    }
}
