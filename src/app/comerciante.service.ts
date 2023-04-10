import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComercianteService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getComerciantes() {
    return this.http.get(`${this.baseUrl}/comerciantes/`);
  }

  getComerciante(id_comerciante: number) {
    return this.http.get(`${this.baseUrl}/comerciantes/${id_comerciante}`);
  }

  createComerciante(comerciante: any) {
    return this.http.post(`${this.baseUrl}/comerciantes/`, comerciante);
  }

  updateComerciante(comerciante: any) {
    return this.http.put(`${this.baseUrl}/comerciantes/${comerciante.id_comerciante}`, comerciante);
  }

  deleteComerciante(id_comerciante: number) {
    return this.http.delete(`${this.baseUrl}/comerciantes/${id_comerciante}`);
  }
}
