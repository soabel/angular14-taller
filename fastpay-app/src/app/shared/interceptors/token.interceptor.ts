import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // let newRequest = request.clone();

    if (sessionStorage.getItem('authUser') && sessionStorage.getItem('authUser') != ''
      && request.url.indexOf('/authenticate') < 0) {
      let authUser = JSON.parse(sessionStorage.getItem('authUser')!!);

      sessionStorage.getItem('auhtUser');
      let newRequest = request.clone({ headers: request.headers.set('Authorization', `Bearer ${authUser.apiToken}`) });

      console.log('TokenInterceptor - request', newRequest);

      return next.handle(newRequest);

    }
    return next.handle(request);

  }
}
