import { Component, Inject, Input, OnInit } from '@angular/core';
import { CharacterInterface } from '../../../modules/characters/interfaces/character.interface';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-character-modal-content',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './character-modal-content.component.html',
  styleUrl: './character-modal-content.component.scss'
})
export class CharacterModalContentComponent implements OnInit {
  character: CharacterInterface | null = null;

  constructor(
    public dialogRef: MatDialogRef<CharacterModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CharacterInterface
  ) {
    this.character = data;
  }

  ngOnInit() {
    // chamar service para buscar dados do planeta
    // chamar service para buscar imagem do personagem
  }
}
