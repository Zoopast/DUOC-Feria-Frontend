import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductorService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProductores() {
    return this.http.get(`${this.baseUrl}/productores/`);
  }

  getProductor(id_productor: number) {
    return this.http.get(`${this.baseUrl}/productores/${id_productor}`);
  }

  createProductor(productor: any) {
    return this.http.post(`${this.baseUrl}/productores/`, productor);
  }

  updateProductor(productor: any) {
    return this.http.put(`${this.baseUrl}/productores/${productor.id_productor}`, productor);
  }

  deleteProductor(id_productor: number) {
    return this.http.delete(`${this.baseUrl}/productores/${id_productor}`);
  }
}
