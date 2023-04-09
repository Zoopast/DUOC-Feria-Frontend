import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductoresService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getProductores() {
    return this.http.get(`${this.baseUrl}/productores`);
  }
}
