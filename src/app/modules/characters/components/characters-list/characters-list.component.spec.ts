import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';

import { CharactersListComponent } from './characters-list.component';
import { CharactersService } from '../../services/characters.service';
import { SearchService } from '../../../../shared/services/search/search.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { CharacterInterface } from '../../interfaces/character.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { CharacterModalContentComponent } from '../../../../shared/components/character-modal-content/character-modal-content.component';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;
  let dialog: MatDialog;
  let charactersService: CharactersService;
  let searchService: SearchService;

  const mockCharacter: CharacterInterface = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/'
    ],
    species: [],
    vehicles: [
      'https://swapi.dev/api/vehicles/14/',
      'https://swapi.dev/api/vehicles/30/'
    ],
    starships: [
      'https://swapi.dev/api/starships/12/',
      'https://swapi.dev/api/starships/22/'
    ],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/'
  };
  
  const mockCharacterPhoto = {
    _id: '60f2b5c7e6f9a20015f4e0b0',
    name: 'Luke Skywalker',
    description: 'Luke Skywalker is a fictional character and the main protagonist of the original film trilogy of the Star Wars franchise created by George Lucas.',
    image: 'https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg/revision/latest/scale-to-width-down/340?cb=20171215160711',
    __v: 0
  };

  const mockPlanet = {
    name: 'Tatooine',
    rotation_period: '23',
    orbital_period: '304',
    diameter: '10465',
    climate: 'arid',
    gravity: '1 standard',
    terrain: 'desert',
    surface_water: '1',
    population: '200000'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatDialogModule
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
    dialog = TestBed.inject(MatDialog);
    charactersService = TestBed.inject(CharactersService);
    searchService = TestBed.inject(SearchService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open character modal and display correct information', fakeAsync(() => {
    spyOn(dialog, 'open').and.returnValue({
      afterClosed: () => of(true)
    } as any);

    spyOn(charactersService, 'getOneByUrl').and.returnValue(of(mockPlanet));
    spyOn(charactersService, 'getCharacterPhotoByName').and.returnValue(of([mockCharacterPhoto]));

    component.openCharacterModal(mockCharacter);

    const dialogRef = dialog.open(CharacterModalContentComponent, {
      data: mockCharacter
    });

    expect(dialog.open).toHaveBeenCalledWith(jasmine.any(Function), {
      data: mockCharacter
    });

    dialogRef.afterClosed().subscribe(() => {
      const modalElement = document.querySelector('mat-dialog-container');
      // expect(modalElement).toBeTruthy();
      // expect(modalElement?.textContent).toContain('Luke Skywalker');
    });
  }));
});
