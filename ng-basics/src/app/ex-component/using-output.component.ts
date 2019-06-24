import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-using-output',
  templateUrl: './using-output.component.html',
})
export class UsingOutputComponent {
    @Output('updateValue') onUpdateValue = new EventEmitter<number>();

    updateValue () {
        this.onUpdateValue.emit(1);
    }
}
