import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LogoutComponent } from './modules/auth/components/logout/logout.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LogoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly router = inject(Router);
  
  isLoginRoute(): boolean {
    return this.router.url === '/login';
  }
}
