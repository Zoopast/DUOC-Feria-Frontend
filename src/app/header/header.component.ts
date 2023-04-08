import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userData: any;
  logged = false;

  constructor(private userService: UserService, private cookieService: CookieService) {
    if (this.cookieService.check('access_token')){
      this.userService.getUserData().subscribe(data => {
        this.userData = data;
        if (this.userData != undefined) {
          this.logged = true;
        }
      });
    }
  }

  logout(){
    this.cookieService.delete('access_token');
    window.location.href = '/';
    this.logged = false;
  }
}
