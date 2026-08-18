import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve
} from '@angular/router';
import { Observable } from 'rxjs';

import { Hotel } from '../models/hotel.model';
import { HotelService } from '../services/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelResolver implements Resolve<Hotel> {

  constructor(
    private hotelService: HotelService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Hotel> {

    const id = Number(route.paramMap.get('id'));

    return this.hotelService.getHotelById(id);
  }
}