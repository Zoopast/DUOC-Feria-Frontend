import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../environments/environment';
import { Usuario } from './usuario';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  signup(user: any) {
    return this.http.post(`${this.baseUrl}/usuarios/sign_up`, user);
  }

  login(user: FormData) {
    return this.http.post(`${this.baseUrl}/usuarios/sign_in`, user);
  }

  getUserData() {
    const data = this.http.get(`${this.baseUrl}/usuarios/me`);
    return data;
  }

  getAuthToken() {
    return this.cookieService.get('access_token');
  }

  isLoggedIn(){
    return this.cookieService.check('access_token');
  }

  createUser(user: Usuario) {
    return this.http.post(`${this.baseUrl}/usuarios`, user);
  }

  getUser(id_usuario: number){
    return this.http.get(`${this.baseUrl}/usuarios/${id_usuario}`);
  }
}