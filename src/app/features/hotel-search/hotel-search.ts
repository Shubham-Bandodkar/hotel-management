import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../core/models/hotel.model';
import { HotelService } from '../../core/services/hotel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hotel-search',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './hotel-search.html',
  styleUrl: './hotel-search.css',
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
    private hotelService: HotelService
  ) { }

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(): void {

    this.loading = true;

    this.hotelService.getHotels().subscribe({
      next: hotels => {

        console.log('HOTELS FROM API:', hotels);

        this.hotels = hotels;
        this.filteredHotels = hotels;

        this.updatePagination();

        console.log('PAGINATED HOTELS:', this.paginatedHotels);

        this.loading = false;
      },
      error: error => {

        this.errorMessage = error.message;
        this.loading = false;

      }
    });
  }

  searchHotels(): void {

    const search = this.searchTerm
      .trim()
      .toLowerCase();

    if (!search) {
      this.filteredHotels = this.hotels;
    } else {
      this.filteredHotels = this.hotels.filter(hotel =>
        hotel.name.toLowerCase().includes(search)
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
      this.filteredHotels.slice(startIndex, endIndex);
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
      this.filteredHotels.length / this.pageSize
    );
  }
}
