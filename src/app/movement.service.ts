import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  private baseUrl = '/api/movement';

  constructor(private http: HttpClient) { }

  getMovementsByCreditCardId(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/creditcard/${id}`);
  }

  getMovementById(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMovement(movement: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, movement);
  }

  deleteMovement(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
