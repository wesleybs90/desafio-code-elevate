import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'characters',
    loadChildren: async () => {
      return (await import('./modules/characters/characters.module')).CharactersModule;
    },
  },
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'characters',
    pathMatch: 'full',
  },
];
