import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError, map, Observable, of } from 'rxjs';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CharacterCardComponent } from '../../../../shared/components/character-card/character-card.component';
import { CharacterInterface } from '../../interfaces/character.interface';
import { CharactersService } from '../../services/characters.service';
import { PaginatorComponent } from '../../../../shared/components/paginator/paginator.component';
import { SwapiResponseInterface } from '../../interfaces/swapi-response.interface';
import { CharacterModalComponent } from '../../../../shared/components/character-modal/character-modal.component';
import { SearchBarComponent } from '../../../../shared/components/search-bar/search-bar.component';
import { SearchService } from '../../../../shared/services/search/search.service';
import { SearchQueryInterface } from '../../../../shared/interfaces/search-query.interface';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [
    CommonModule,
    CharacterCardComponent,
    CharacterModalComponent,
    MatProgressSpinnerModule,
    PaginatorComponent,
    SearchBarComponent,
  ],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss'
})
export class CharactersListComponent {
  // Obervable of characters data for async pipe on template
  protected data$!: Observable<SwapiResponseInterface<CharacterInterface> | null>;

  private charactersService = inject(CharactersService);
  private searchService = inject(SearchService);
  
  searchQuery: SearchQueryInterface = {
    name: '',
    homeworld: '',
    species: '',
    starships: '',
  };

  selectedCharacter: CharacterInterface | null = null;

  constructor() {
    effect(() => {
      this.searchQuery = this.searchService.searchParams();

      // Get all characters data from SWAPI on load
      this.data$ = this.getCharactersBySearchQuery(this.searchQuery.name.trim());
    });
  }

  // Get characters data from service
  getCharactersBySearchQuery(searchQuery: string) {
    return this.charactersService.getCharactersBySearchQuery(searchQuery);
    // Filter the result by searchQuery.homeworld, searchQuery.species and searchQuery.starships
    // Get inputed searchQuery from search bar, call API to get the IDs list for each searchQuery.homeworld, searchQuery.species and searchQuery.starships
    // Then filter the result by the IDs list      
  }

  getCharactersByUrl(pageUrl: string | null) {
    if (!pageUrl) {
      return;
    }

    this.data$ = this.charactersService.getCollectionByUrl<CharacterInterface>(pageUrl);
  }

  openCharacterModal(character: CharacterInterface) {
    this.selectedCharacter = character;
  }
}
