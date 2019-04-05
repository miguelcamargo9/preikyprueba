import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface accessData {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false')
  private baseUrl = '/api/users';

  constructor(private http: HttpClient) {}

  setLoggedIn(value: boolean){
    this.loggedInStatus = value
    localStorage.setItem('loggedIn', `${this.loggedInStatus}`)
  }

  get isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString())
  }

  getUserDetails(user, pass){
    return this.http.post<accessData>(`${this.baseUrl}/login`, {
      username: user,
      password: pass
    });
  }
}
