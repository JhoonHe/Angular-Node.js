import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:3001/';
    this.myApiUrl = 'api/products';
  }

  getProducts(): Observable<any> {
    // const token = localStorage.getItem('token');
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    // return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`, { headers: headers });
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
