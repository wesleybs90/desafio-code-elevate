import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError, map, Observable, of } from 'rxjs';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CharacterCardComponent } from '../../../../shared/components/character-card/character-card.component';
import { CharacterInterface } from '../../interfaces/character.interface';
import { CharactersService } from '../../services/characters.service';
import { PaginatorComponent } from '../../../../shared/components/paginator/paginator.component';
import { SwapiResponseInterface } from '../../interfaces/swapi-response.interface';
import { CharacterModalComponent } from '../../../../shared/components/character-modal/character-modal.component';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    CharacterCardComponent,
    PaginatorComponent,
    CharacterModalComponent,
  ],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss'
})
export class CharactersListComponent implements OnInit {
  // Obervable of characters data for async pipe on template
  protected data$!: Observable<SwapiResponseInterface<CharacterInterface> | null>;

  private charactersService = inject(CharactersService);
  
  searchQuery: string = '';
  totalItems: number = 0;
  nextPageUrl: string | null = '';
  prevPageUrl: string | null = '';

  selectedCharacter: CharacterInterface | null = null;
  
  ngOnInit() {
    // Get all characters data from SWAPI on load
    this.data$ = this.getCharactersBySearchQuery(this.searchQuery);
  }

  // Get characters data from service
  getCharactersBySearchQuery(searchQuery: string) {
    return this.charactersService.getCharactersBySearchQuery(searchQuery);
  }

  getCharactersByUrl(pageUrl: string | null) {
    if (!pageUrl) {
      return;
    }

    this.data$ = this.charactersService.getCollectionByUrl<CharacterInterface>(pageUrl);
  }

  openCharacterModal(character: CharacterInterface) {
    console.log('Selected character:', character);
    this.selectedCharacter = character;
  }
}
