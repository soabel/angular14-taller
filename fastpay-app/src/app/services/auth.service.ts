import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  // public authUser?: User;

  constructor() { }

  login(userName: string, password: string): Observable<User> {

    let result: User = { name: 'Alfredo Benaute', userName: 'alfredo', password: '123456', email: 'alfredo@gmail.com' };;

    if (userName == 'alfredo' && password == '123456') {
      // this.authUser = result;
      sessionStorage.setItem('authUser', JSON.stringify(result));
      return of(result);
    }

    return of();

  }
}
