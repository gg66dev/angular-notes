import { Component } from '@angular/core';
import { Router} from '@angular/router';

import { GlobalStateService } from './service/global-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(
    public globals: GlobalStateService,
    private _router: Router
    ) {
      console.log(this.globals.id);
    }



  logout() {
    this.globals.logout().then( () => {
      this._router.navigateByUrl('/login');
    });
  }


}
