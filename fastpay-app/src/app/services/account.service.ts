import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getAccount(userId: number): Observable<Account>{

    return this.httpClient.get<Account>(`${environment.apiUrl}/users/${userId}/account`);

  }

}
