import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LogoutComponent } from './modules/auth/components/logout/logout.component';
import { CommonModule } from '@angular/common';
import { AlertToastComponent } from './shared/components/alert-toast/alert-toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LogoutComponent,
    AlertToastComponent
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
