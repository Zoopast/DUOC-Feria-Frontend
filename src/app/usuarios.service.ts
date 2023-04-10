import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(`${this.baseUrl}/usuarios/`);
  }

  getUsuario(id_usuario: number) {
    return this.http.get(`${this.baseUrl}/usuarios/${id_usuario}`);
  }

  createUsuario(usuario: any) {
    return this.http.post(`${this.baseUrl}/usuarios`, usuario);
  }

  updateUsuario(usuario: any) {
    return this.http.put(`${this.baseUrl}/usuarios/${usuario.id_usuario}`, usuario);
  }

  deleteUsuario(id_usuario: number) {
    return this.http.delete(`${this.baseUrl}/usuarios/${id_usuario}`);
  }
}
