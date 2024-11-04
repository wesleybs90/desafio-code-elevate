import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { AuthGuard } from '../auth/services/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CharactersListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: './',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
