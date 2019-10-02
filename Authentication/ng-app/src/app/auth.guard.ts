import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
      ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean |UrlTree> {
    if (this._authService.loggedIn()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
