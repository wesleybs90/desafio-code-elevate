import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {
  protected isLoggedIn$!: Observable<boolean>;

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isAuthenticated$;
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isLoginRoute(): boolean {
    return this.router.url === '/login';
  }
}
