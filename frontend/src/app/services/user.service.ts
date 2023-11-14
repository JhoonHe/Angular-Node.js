import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:3001/';
    this.myApiUrl = 'api/users';
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}/register`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl}/login`, user);
  }
}
