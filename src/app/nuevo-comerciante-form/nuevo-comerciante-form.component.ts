import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UserService } from '../user.service';
import { ComercianteService } from '../comerciante.service';
@Component({
  selector: 'app-comerciante-form',
  templateUrl: './nuevo-comerciante-form.component.html',
  styleUrls: ['./nuevo-comerciante-form.component.css']
})
export class NuevoComercianteFormComponent {

  constructor(private userService: UserService, private comercianteService: ComercianteService) { }

  comerciante = {
    nombre: '',
    telefono: '',
    direccion: '',
    email: '',
    id_usuario: 0
  }

  usuario = new Usuario(0, '  ','','Comerciante','', '', '');
  submitted= false;
  onSubmit() { 
    this.submitted = true;
    this.userService.createUser(this.usuario).subscribe((response: any) => {
      this.comerciante.id_usuario = response.user[0];
      this.comerciante.nombre = this.usuario.nombre_usuario + ' ' + this.usuario.apellidos_usuario;
      this.comerciante.email = this.usuario.email;
      this.comercianteService.createComerciante(this.comerciante).subscribe((response: any) => {
        window.location.href = '/comerciantes';
      });
    });

    
   }


}
