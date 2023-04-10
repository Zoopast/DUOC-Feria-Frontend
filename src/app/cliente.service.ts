import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get(`${this.baseUrl}/clientes/`);
  }

  getCliente(id_cliente: number) {
    return this.http.get(`${this.baseUrl}/clientes/${id_cliente}`);
  }

  createCliente(cliente: any) {
    return this.http.post(`${this.baseUrl}/clientes/`, cliente);
  }

  updateCliente(cliente: any) {
    return this.http.put(`${this.baseUrl}/clientes/${cliente.id_cliente}`, cliente);
  }

  deleteCliente(id_cliente: number) {
    return this.http.delete(`${this.baseUrl}/clientes/${id_cliente}`);
  }
}
