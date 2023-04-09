import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  roles = ["Productor", "Transportista", "Comprador", "Administrador"]

  model = new Usuario('','','','', '', '');
  submitted = false;

  constructor(private userService: UserService, private cookieService: CookieService) {}

  onSubmit() { 
    this.submitted = true;
    this.userService.signup(this.model).subscribe((response: any) => {
      this.cookieService.set('access_token', response.access_token);
      window.location.href = '/';
    });
  }

  newUser(){
    this.model = new Usuario('','','','', '', '');
  }
}
