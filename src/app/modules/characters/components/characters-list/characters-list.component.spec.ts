import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersListComponent } from './characters-list.component';
import { CharactersService } from '../../services/characters.service';
import { SearchService } from '../../../../shared/services/search/search.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
      ],
      providers: [
        CharactersService,
        SearchService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
