import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterModalContentComponent } from './character-modal-content.component';

describe('CharacterModalContentComponent', () => {
  let component: CharacterModalContentComponent;
  let fixture: ComponentFixture<CharacterModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterModalContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
