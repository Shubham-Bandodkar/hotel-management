import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from '../../../../core/models/hotel.model';


@Component({
  selector: 'app-hotel-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './hotel-home.html',
  styleUrl: './hotel-home.css'
})
export class HotelHome implements OnInit {

  hotel!: Hotel;

  maxBookingCount = 100;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.hotel =
      this.route.parent?.snapshot.data['hotel'];

    console.log('HOME HOTEL:', this.hotel);

    if (this.hotel?.bookings?.length) {
      this.maxBookingCount = Math.max(
        ...this.hotel.bookings.map(
          booking => booking.count
        ),
        100
      );
    }
  }

  getBarHeight(count: number): number {
    return (count / this.maxBookingCount) * 100;
  }

}