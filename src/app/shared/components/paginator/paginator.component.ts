import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() nextPageUrl: string | null = '';
  @Input() prevPageUrl: string | null = '';
  @Output() pageChange = new EventEmitter<string | null>();

  totalPages: number = 0;
  currentPage: number = 1;

  ngOnInit() {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.currentPage = this.getCurrentPage();
  }

  getCurrentPage() {
    if (this.nextPageUrl) {
      const currentPage = this.nextPageUrl.split('page=')[1];
      return parseInt(currentPage, 10) - 1;
    }

    if (this.prevPageUrl) {
      const currentPage = this.prevPageUrl.split('page=')[1];
      return parseInt(currentPage, 10) + 1;
    }

    return 1;
  }
}
