import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  roles = ["Productor", "Transportista", "Comprador", "Administrador"]

  model = new Usuario('','','','', '', '');
  submitted = false;

  constructor(private userService: UserService) {}

  onSubmit() { 
    this.submitted = true;
    this.userService.signup(this.model).subscribe((response: any) => {
      localStorage.setItem('token', response.token);
    });
  }

  newUser(){
    this.model = new Usuario('','','','', '', '');
  }
}
