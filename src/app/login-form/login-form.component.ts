import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [CookieService]
})
export class LoginFormComponent {

  submitted = false;
  model = {
    username: '',
    contrasena: ''
  }

  formData = new FormData();
  
  constructor(private userService: UserService, private cookieService: CookieService) { }

  onSubmit(){
    this.submitted = true;
    this.formData.append('username', this.model.username);
    this.formData.append('password', this.model.contrasena);

    this.userService.login(this.formData).subscribe((response: any) => {
      console.log(response);
      this.cookieService.set('access_token', response.access_token);
    });
  }
}