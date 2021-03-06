import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditcardService {

  private baseUrl = '/api/creditcard';

  constructor(private http: HttpClient) { }

  getCreditCardsByUser(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/user/${id}`);
  }

  getCreditCardById(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCreditCard(creditcard: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, creditcard);
  }

  deleteCreditCard(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
