import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ProductoresService {
  private baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getProductores() {
    return this.http.get(`${this.baseUrl}/productores`);
  }
}
