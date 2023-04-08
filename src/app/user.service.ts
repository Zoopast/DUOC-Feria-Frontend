import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  signup(user: any) {
    return this.http.post(`${this.baseUrl}/usuarios/sign_up`, user);
  }

  login(user: FormData) {
    return this.http.post(`${this.baseUrl}/usuarios/sign_in`, user);
  }
}