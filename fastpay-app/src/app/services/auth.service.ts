import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  // public authUser?: User;

  constructor(private httpClient: HttpClient) { }

  login(userName: string, password: string): Observable<any> {

    const data = { userName: userName, password: password };
    return this.httpClient.post(`${environment.apiUrl}/users/authenticate`, data);



    // let result: User = { name: 'Alfredo Benaute', userName: 'alfredo', password: '123456', email: 'alfredo@gmail.com' };;

    // if (userName == 'alfredo' && password == '123456') {
    //   // this.authUser = result;
    //   sessionStorage.setItem('authUser', JSON.stringify(result));
    //   return of(result);
    // }

    // return of();

  }
}
