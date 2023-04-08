import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) { }

  canActivate(): boolean {
    if (this.cookieService.check('access_token')) {
      // If the JWT token cookie exists, prevent the user from accessing the login and signup routes
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}