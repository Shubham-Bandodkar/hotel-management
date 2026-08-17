import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Hotel } from '../models/hotel.model';

@Injectable({
  providedIn: 'root',
})
export class HotelService {

  private readonly apiUrl = 'assets/mock/hotels.json';

  constructor(private http: HttpClient) {}

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Failed to load hotels', error);

        return throwError(
          () => new Error('Unable to load hotels. Please try again.')
        );
      })
    );
  }

  getHotelById(id: number): Observable<Hotel> {
    return this.getHotels().pipe(
      map(hotels => {
        const hotel = hotels.find(hotel => hotel.id === id);

        if (!hotel) {
          throw new Error(`Hotel with ID ${id} not found`);
        }

        return hotel;
      })
    );
  }
}