import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  usuarios: Usuario[] = [];

  constructor(private usuariosService: UsuariosService) {
    this.usuariosService.getUsuarios().subscribe((response: any) => {
      response.forEach((usuario: any) => {
        console.log(usuario);
        const new_usuario = new Usuario(usuario[0], usuario[2], usuario[3], usuario[7], usuario[1], usuario[6], usuario[4]);
        this.usuarios.push(new_usuario);
      });
      console.log(this.usuarios);
    });
  }

  editarUsuario() {

  }

  eliminarUsuario(id_usuario: number) {
    this.usuariosService.deleteUsuario(id_usuario).subscribe((response: any) => {
      console.log(response);
      window.location.href = '/usuarios';
    });
  }
}
