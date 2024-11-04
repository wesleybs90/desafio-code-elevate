import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

import { environment } from '../../../../environments/environment.local';

import { SwDataBankResponseInterface } from '../interfaces/sw-data-bank-response.interface';
import { AlertToastService } from '../../../shared/services/alert-toast/alert-toast.service';
import { SwapiResourcesEnum } from '../enums/swapi-resources.enum';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private readonly http = inject(HttpClient);
  private readonly alertToastService = inject(AlertToastService);

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
