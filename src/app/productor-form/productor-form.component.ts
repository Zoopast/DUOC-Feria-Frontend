import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UserService } from '../user.service';
import { ProductorService } from '../productor.service';
import { APP_BASE_HREF } from '@angular/common';
@Component({
  selector: 'app-productor-form',
  templateUrl: './productor-form.component.html',
  styleUrls: ['./productor-form.component.css']
})
export class ProductorFormComponent {

  constructor(private userService: UserService, private productorService: ProductorService) { }

  productor = {
    nombre: '',
    telefono: '',
    direccion: '',
    email: '',
    id_usuario: 0
  }

  usuario = new Usuario('','','Productor','', '', '');
  submitted= false;
  onSubmit() { 
    this.submitted = true;
    this.userService.createUser(this.usuario).subscribe((response: any) => {
      this.productor.id_usuario = response.user[0];
      this.productor.nombre = this.usuario.nombre_usuario + ' ' + this.usuario.apellidos_usuario;
      this.productor.email = this.usuario.email;
      this.productorService.createProductor(this.productor).subscribe((response: any) => {
        window.location.href = '/productores';
      });
    });

    
   }


}
