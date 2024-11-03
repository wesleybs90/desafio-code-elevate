import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { environment } from '../../../../environments/environment.local';

import { CharacterInterface } from '../interfaces/character.interface';
import { SwapiResponseInterface } from '../interfaces/swapi-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private readonly http: HttpClient
  ) { }

  // Get all characters from SWAPI with user search query
  getCharactersBySearchQuery(
    searchQuery: string
  ): Observable<SwapiResponseInterface<CharacterInterface>> {
    return this.http.get<SwapiResponseInterface<CharacterInterface>>(`${environment.swapiUrl}/people?search=${searchQuery}`);
  }

  // Get content by URL
  getByUrl<T>(
    url: string
  ): Observable<SwapiResponseInterface<T>> {
    // return throwError('Not implemented');
    return this.http.get<SwapiResponseInterface<T>>(url);
  }
}
