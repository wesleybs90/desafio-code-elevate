import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersService } from './services/characters.service';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    CharactersRoutingModule
  ],
  providers: [
    CharactersService
  ]
})
export class CharactersModule { }
