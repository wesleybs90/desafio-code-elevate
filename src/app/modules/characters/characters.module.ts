import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersService } from './services/characters.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ],
  providers: [
    CharactersService
  ]
})
export class CharactersModule { }
