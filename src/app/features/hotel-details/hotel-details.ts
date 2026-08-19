import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hotel } from '../../core/models/hotel.model';

@Component({
  selector: 'app-hotel-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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

  editedHotelName = '';
  editedProvider = '';

  editedAddress!: Hotel['address'];

  editedBasicInfo!: Hotel['basicInfo'];


  constructor(
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {

    this.hotel =
      this.route.snapshot.data['hotel'];

  }


  editHotel(): void {

    this.editedHotelName =
      this.hotel.name;

    this.editedProvider =
      this.hotel.provider;

    this.editingHotel = true;
  }


  saveHotel(): void {

    this.hotel.name =
      this.editedHotelName;

    this.hotel.provider =
      this.editedProvider;

    this.editingHotel = false;
  }


  cancelHotelEdit(): void {

    this.editingHotel = false;
  }




  editAddress(): void {

    this.editedAddress = {
      ...this.hotel.address
    };

    this.editingAddress = true;
  }


  saveAddress(): void {

    this.hotel.address = {
      ...this.editedAddress
    };

    this.editingAddress = false;
  }


  cancelAddressEdit(): void {

    this.editingAddress = false;
  }



  editBasicInfo(): void {

    this.editedBasicInfo = {
      ...this.hotel.basicInfo
    };

    this.editingBasicInfo = true;
  }


  saveBasicInfo(): void {

    this.hotel.basicInfo = {
      ...this.editedBasicInfo
    };

    this.editingBasicInfo = false;
  }


  cancelBasicInfoEdit(): void {

    this.editingBasicInfo = false;
  }

}