import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { CharacterInterface } from '../../../modules/characters/interfaces/character.interface';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent {
  @Input() character!: CharacterInterface;
  @Output() selectedCharacter = new EventEmitter<CharacterInterface>();
}
