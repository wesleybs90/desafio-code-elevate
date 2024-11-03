import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersListComponent,
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
