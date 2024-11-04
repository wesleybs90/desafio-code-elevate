import { TestBed } from '@angular/core/testing';

import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CharactersService } from './characters.service';
import { provideHttpClient } from '@angular/common/http';

describe('CharactersService', () => {
  let service: CharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        CharactersService,
        provideHttpClient(),
        provideHttpClientTesting() 
      ]
    });
    service = TestBed.inject(CharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
