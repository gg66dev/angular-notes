import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-basics';

  navMenu: Array<Array<string>> = [
    ['/ex-component', 'Component'],
    ['/ex-service', 'Service'],
    ['/ex-data-binding', 'Data Binding'],
    ['/ex-directives', 'Directives'],
    ['/ex-observables', 'Observables'],
    ['/ex-forms', 'Forms'],
    ['/ex-reactive-forms', 'Reactive Forms']
  ];

}
