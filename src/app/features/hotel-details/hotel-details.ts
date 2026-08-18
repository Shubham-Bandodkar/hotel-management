import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';

import { CommonModule } from '@angular/common';

import { Hotel } from '../../core/models/hotel.model';

@Component({
  selector: 'app-hotel-details',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './hotel-details.html',
  styleUrl: './hotel-details.css'
})
export class HotelDetails implements OnInit {

  hotel!: Hotel;

  editingHotel = false;
  editingAddress = false;
  editingBasicInfo = false;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.hotel =
      this.route.snapshot.data['hotel'];

  }

  editHotel(): void {
    this.editingHotel = true;
  }

  editAddress(): void {
    this.editingAddress = true;
  }

  editBasicInfo(): void {
    this.editingBasicInfo = true;
  }

}