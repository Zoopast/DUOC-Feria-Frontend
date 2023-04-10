import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  editarCliente(cliente: Cliente) {}

  eliminarCliente(id_cliente: number) {

  }
}
