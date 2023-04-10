import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';
import { ProductorService } from '../productor.service';
import { ComercianteService } from '../comerciante.service';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  roles = ["Productor", "Transportista", "Comprador", "Administrador", "Comerciante"]
  productor = {
    telefono: '',
    direccion: ''
  }
  comerciante = {
    telefono: '',
    direccion: ''
  }
  model = new Usuario(0, '','','','', '', '');
  submitted = false;

  constructor(private userService: UserService, 
              private cookieService: CookieService,
              private productorService: ProductorService,
              private comercianteService: ComercianteService) {}

  onSubmit() { 
    this.submitted = true;
    this.userService.signup(this.model).subscribe((response: any) => {

      if(response.status === 201){
        const user_form = new FormData();
        user_form.append('username', this.model.email);
        user_form.append('password', this.model.contrasena);
        alert("Usuario creado correctamente");
        this.userService.login(user_form).subscribe((response: any) => {
          this.cookieService.set('access_token', response.access_token);
          this.userService.getUserData().subscribe((response: any) => {
            if(this.model.rol === "Productor"){
              const newProductor = {
                nombre: this.model.nombre_usuario + " " + this.model.apellidos_usuario,
                email: this.model.email,
                telefono: this.productor.telefono,
                direccion: this.productor.direccion,
                id_usuario: response.id_usuario
              }
              this.productorService.createProductor(newProductor).subscribe((response: any) => {});
            }
            else if(this.model.rol === "Comerciante"){
              const newComerciante = {
                nombre: this.model.nombre_usuario + " " + this.model.apellidos_usuario,
                email: this.model.email,
                telefono: this.comerciante.telefono,
                direccion: this.comerciante.direccion,
                id_usuario: response.id_usuario
              }
              this.comercianteService.createComerciante(newComerciante).subscribe((response: any) => {});
            }
            window.location.href = '/';
          });
        });
      }
    });
  }

  newUser(){
    this.model = new Usuario(0, '','','','', '', '');
  }
}
