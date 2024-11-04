import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { CharacterInterface } from '../../../modules/characters/interfaces/character.interface';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CharactersService } from '../../../modules/characters/services/characters.service';
import { catchError, map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PlanetInterface } from '../../../modules/characters/interfaces/planet.interface';
import { CmToMetersPipe } from '../../pipes/cm-to-meters.pipe';

@Component({
  selector: 'app-character-modal-content',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    CmToMetersPipe,
  ],
  templateUrl: './character-modal-content.component.html',
  styleUrl: './character-modal-content.component.scss'
})
export class CharacterModalContentComponent implements OnInit {
  character: CharacterInterface | null = null;

  protected characterPhoto$!: Observable<string>;
  protected planet$!: Observable<PlanetInterface>;

  private readonly charactersService = inject(CharactersService);

  constructor(
    public dialogRef: MatDialogRef<CharacterModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CharacterInterface
  ) {
    this.character = data;
  }

  ngOnInit() {
    // Get planet data by character homeworld URL from SWAPI
    this.planet$ = this.getCharacterPlanet(this.character?.homeworld || '');

    // Get character photo by character name from SWDataBank API
    this.characterPhoto$ = this.getCharacterPhotoByName(this.character?.name || '');
  }

  getCharacterPhotoByName(characterName: string): Observable<string> {
    return this.charactersService.getCharacterPhotoByName(characterName).pipe(
      map((data) => {
        // Check if character photo was found, if not return a placeholder image
        if (data.length === 0) {
          return './assets/images/star-wars-logo-placeholder.webp';
        }

        return data.filter((item) => item.name === this.character?.name)[0]?.image;
      })
    );
  }

  getCharacterPlanet(planetUrl: string): Observable<PlanetInterface> {
    return this.charactersService.getOneByUrl<PlanetInterface>(planetUrl);
  }
}
