import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { SearchQueryInterface } from '../../interfaces/search-query.interface';
import { SearchService } from '../../services/search/search.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit {
  private searchService = inject(SearchService);

  searchForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.searchForm = this.fb.group({
      name: [''],
      homeworld: [''],
      species: [''],
      starships: [''],
    });

    // Set search params on form value changes with debounce time
    this.searchForm.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((value: SearchQueryInterface) => {
      this.searchService.searchParams.set(value);
    });
  }
}
