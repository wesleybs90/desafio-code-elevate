import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { environment } from '../../../../environments/environment.local';

import { CharacterInterface } from '../interfaces/character.interface';
import { SwapiResponseInterface } from '../interfaces/swapi-response.interface';
import { SwDataBankResponseInterface } from '../interfaces/sw-data-bank-response.interface';

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

  // Get all characters content by URL
  getCollectionByUrl<T>(
    url: string
  ): Observable<SwapiResponseInterface<T>> {
    return this.http.get<SwapiResponseInterface<T>>(url);
  }

  // Get one character/planet content by URL
  getOneByUrl<T>(
    url: string
  ): Observable<T> {
    return this.http.get<T>(url);
  }

  // Get character photo by character name
  getCharacterPhotoByName(
    characterName: string
  ): Observable<SwDataBankResponseInterface[]> {
    return this.http.get<SwDataBankResponseInterface[]>(`${environment.swDataBankUrl}/characters/name/${characterName}`);
  }
}
