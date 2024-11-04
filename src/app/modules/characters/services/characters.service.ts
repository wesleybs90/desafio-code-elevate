import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

import { environment } from '../../../../environments/environment.local';

import { CharacterInterface } from '../interfaces/character.interface';
import { SwapiResponseInterface } from '../interfaces/swapi-response.interface';
import { SwDataBankResponseInterface } from '../interfaces/sw-data-bank-response.interface';
import { AlertToastService } from '../../../shared/services/alert-toast/alert-toast.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private readonly http = inject(HttpClient);
  private readonly alertToastService = inject(AlertToastService);

  // Get all characters from SWAPI with user search query
  getCharactersBySearchQuery(
    searchQuery: string
  ): Observable<SwapiResponseInterface<CharacterInterface>> {
    return this.http.get<SwapiResponseInterface<CharacterInterface>>(`${environment.swapiUrl}/people?search=${searchQuery}`)
      .pipe(
        catchError(() => {
          this.alertToastService.error('Failed to get character by name');
          return [];
        })
      );
  }

  // Get all characters content by URL
  getCollectionByUrl<T>(
    url: string
  ): Observable<SwapiResponseInterface<T>> {
    return this.http.get<SwapiResponseInterface<T>>(url)
      .pipe(
        catchError(() => {
          this.alertToastService.error('Failed to get collection by URL');
          return [];
        })
      );
  }

  // Get one character/planet content by URL
  getOneByUrl<T>(
    url: string
  ): Observable<T> {
    return this.http.get<T>(url)
      .pipe(
        catchError(() => {
          this.alertToastService.error('Failed to get content by URL');
          return [];
        })
      );
  }

  // Get character photo by character name
  getCharacterPhotoByName(
    characterName: string
  ): Observable<SwDataBankResponseInterface[]> {
    return this.http.get<SwDataBankResponseInterface[]>(`${environment.swDataBankUrl}/characters/name/${characterName}`)
      .pipe(
        catchError(() => {
          this.alertToastService.error('Failed to get character photo by name');
          return [];
        })
      );
  }
}
