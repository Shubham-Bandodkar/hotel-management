import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Hotel } from '../../core/models/hotel.model';
import { HotelService } from '../../core/services/hotel';

@Component({
  selector: 'app-hotel-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './hotel-search.html',
  styleUrl: './hotel-search.css'
})
export class HotelSearch implements OnInit {

  hotels: Hotel[] = [];
  filteredHotels: Hotel[] = [];
  paginatedHotels: Hotel[] = [];

  searchTerm = '';

  currentPage = 1;
  pageSize = 20;

  loading = false;
  errorMessage = '';

  constructor(
    private hotelService: HotelService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(): void {

    this.loading = true;
    this.errorMessage = '';

    this.hotelService.getHotels().subscribe({

      next: (hotels: Hotel[]) => {

        this.hotels = hotels;
        this.filteredHotels = [...hotels];

        this.currentPage = 1;

        this.updatePagination();

        this.loading = false;

        // Ensures the UI updates after the async request.
        this.cdr.detectChanges();
      },

      error: (error) => {

        console.error('Failed to load hotels:', error);

        this.errorMessage =
          error.message ||
          'Unable to load hotels. Please try again.';

        this.loading = false;

        this.cdr.detectChanges();
      }
    });
  }

  searchHotels(): void {

    const search = this.searchTerm
      .trim()
      .toLowerCase();

    if (!search) {

      this.filteredHotels = [...this.hotels];

    } else {

      this.filteredHotels = this.hotels.filter(
        hotel =>
          hotel.name
            .toLowerCase()
            .includes(search)
      );
    }

    this.currentPage = 1;

    this.updatePagination();
  }

  updatePagination(): void {

    const startIndex =
      (this.currentPage - 1) * this.pageSize;

    const endIndex =
      startIndex + this.pageSize;

    this.paginatedHotels =
      this.filteredHotels.slice(
        startIndex,
        endIndex
      );
  }

  nextPage(): void {

    if (this.currentPage < this.totalPages) {

      this.currentPage++;

      this.updatePagination();
    }
  }

  previousPage(): void {

    if (this.currentPage > 1) {

      this.currentPage--;

      this.updatePagination();
    }
  }

  get totalPages(): number {

    return Math.ceil(
      this.filteredHotels.length /
      this.pageSize
    );
  }
}