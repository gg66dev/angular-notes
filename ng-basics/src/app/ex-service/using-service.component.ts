import { Component } from '@angular/core';

import { MyListService } from './my-list.service';

@Component({
  selector: 'using-service-component',
  templateUrl: './using-service.component.html',
  providers: [MyListService]
})
export class UsingServiceComponent {

  values: any[];

  constructor(myListService: MyListService) {
    this.values = myListService.values();
  }

}
