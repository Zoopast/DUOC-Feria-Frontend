import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { Productor } from '../productor';
import { UserService } from '../user.service';
import { ProductorService } from '../productor.service';
import { ComercianteService } from '../comerciante.service';
@Component({
  selector: 'app-nuevo-usuario-form',
  templateUrl: './nuevo-usuario-form.component.html',
  styleUrls: ['./nuevo-usuario-form.component.css']
})
export class NuevoUsuarioFormComponent {
  usuario = new Usuario(0, '  ','','','', '', '');
  productor = {
    telefono: '',
    direccion: ''
  }

  comerciante = {
    telefono: '',
    direccion: ''
  }
  submitted= false;
  roles = ["Productor", "Transportista", "Comprador", "Administrador", "Comerciante"]
  
  constructor(private userService: UserService, 
              private productorService: ProductorService, 
              private comercianteService: ComercianteService) { }

  onSubmit() {
    this.submitted = true;
    this.userService.createUser(this.usuario).subscribe((response: any) => {
      console.log(response);
      if(this.usuario.rol == "Productor"){
        const newProductor = {
          id_usuario: response.user[0],
          nombre: this.usuario.nombre_usuario + " " + this.usuario.apellidos_usuario,
          email: this.usuario.email,
          telefono: this.productor.telefono,
          direccion: this.productor.direccion
        }
        this.productorService.createProductor(newProductor).subscribe((response: any) => {
          window.location.href = '/usuarios';
        });
      }
      else if(this.usuario.rol == "Comerciante"){
        const newComerciante = {
          id_usuario: response.user[0],
          nombre: this.usuario.nombre_usuario + " " + this.usuario.apellidos_usuario,
          email: this.usuario.email,
          telefono: this.comerciante.telefono,
          direccion: this.comerciante.direccion
        }
        this.comercianteService.createComerciante(newComerciante).subscribe((response: any) => {
          window.location.href = '/usuarios';
        });
      }
    });
  }
}
