import { Component } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';

import { Hotel } from '../../core/models/hotel.model';

@Component({
  selector: 'app-hotel-details',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './hotel-details.html',
  styleUrl: './hotel-details.css'
})
export class HotelDetails {

  hotel: Hotel;

  constructor(
    private route: ActivatedRoute
  ) {
    this.hotel = this.route.snapshot.data['hotel'];
  }
}