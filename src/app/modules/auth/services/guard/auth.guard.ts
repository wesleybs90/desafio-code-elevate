import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  canActivate(): boolean {
    if (this.authService.isAuthenticated$.subscribe(isAuthenticated => isAuthenticated)) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}