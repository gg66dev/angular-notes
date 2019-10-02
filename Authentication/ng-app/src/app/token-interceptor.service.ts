import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _injector: Injector) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authService = this._injector.get(AuthService);
    let tokenizedReq = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${authService.getToken()}`
      }
    });
    //debugger;
    return next.handle(tokenizedReq);
  }

}
