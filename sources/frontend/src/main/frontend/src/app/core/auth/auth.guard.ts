import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate() {
    console.log('AuthGuard#canActivate called');
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['connexion']);
      return false;
    }

    return true;
  }
}
