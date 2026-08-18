import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from '../../../../core/models/hotel.model';


@Component({
  selector: 'app-hotel-home',
  imports: [],
  templateUrl: './hotel-home.html'
})
export class HotelHome {

  hotel: Hotel;

  constructor(
    private route: ActivatedRoute
  ) {
    this.hotel = this.route.parent?.snapshot.data['hotel'];
  }
}