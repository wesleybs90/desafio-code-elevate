import { Component, EventEmitter, inject, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CharacterInterface } from '../../../modules/characters/interfaces/character.interface';
import { CharacterModalContentComponent } from '../character-modal-content/character-modal-content.component';

@Component({
  selector: 'app-character-modal',
  standalone: true,
  imports: [],
  templateUrl: './character-modal.component.html',
  styleUrl: './character-modal.component.scss'
})
export class CharacterModalComponent implements OnInit {
  @Input() character: CharacterInterface | null = null;
  @Output() closeModal = new EventEmitter<void>();

  private readonly dialog = inject(MatDialog);

  ngOnInit() {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(CharacterModalContentComponent, {
      data: this.character
    });

    dialogRef.afterClosed().subscribe(() => {
      this.closeModal.emit();
    });
  }
}