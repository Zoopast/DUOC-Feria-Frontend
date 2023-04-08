import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

  canActivate(): boolean {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}