import { Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/services/guard/auth.guard';

export const routes: Routes = [
  {
    path: 'characters',
    loadChildren: async () => {
      return (await import('./modules/characters/characters.module')).CharactersModule;
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: async () => {
      return (await import('./modules/auth/auth.module')).AuthModule;
    },
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
