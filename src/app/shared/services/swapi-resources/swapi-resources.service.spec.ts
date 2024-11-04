import { TestBed } from '@angular/core/testing';

import { SwapiResourcesService } from './swapi-resources.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('SwapiResourcesService', () => {
  let service: SwapiResourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        SwapiResourcesService,
        provideHttpClient(),
        provideHttpClientTesting() 
      ]
    });
    service = TestBed.inject(SwapiResourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
