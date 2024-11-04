import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AlertToastService } from '../alert-toast/alert-toast.service';
import { SwapiResourcesEnum } from '../../../modules/characters/enums/swapi-resources.enum';
import { SwapiResponseInterface } from '../../../modules/characters/interfaces/swapi-response.interface';
import { catchError, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class SwapiResourcesService {

  private readonly http = inject(HttpClient);
  private readonly alertToastService = inject(AlertToastService);

  // Get all resources from SWAPI with user search query
  getResourcesBySearchQuery<T>(
    searchQuery: string,
    resource: SwapiResourcesEnum
  ): Observable<SwapiResponseInterface<T>> {
    return this.http.get<SwapiResponseInterface<T>>(`${environment.swapiUrl}/${resource}?search=${searchQuery}`)
      .pipe(
        catchError(() => {
          this.alertToastService.error(`Failed to get ${resource} by name`);
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
}
