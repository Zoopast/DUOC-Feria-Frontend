import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  signup(user: any) {
    return this.http.post(`${this.baseUrl}/usuarios/sign_up`, user);
  }

  login(user: FormData) {
    return this.http.post(`${this.baseUrl}/usuarios/sign_in`, user);
  }

  getUserData() {
    return this.http.get(`${this.baseUrl}/usuarios/me`);
  }

  getAuthToken() {
    return this.cookieService.get('access_token');
  }
}