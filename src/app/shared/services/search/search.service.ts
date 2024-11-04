import { Injectable, signal } from '@angular/core';
import { SearchQueryInterface } from '../../interfaces/search-query.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchParams = signal<SearchQueryInterface>({ 
    name: '',
    homeworld: '',
    species: '',
    starships: '',
   });
}
