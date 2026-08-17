import { Routes } from '@angular/router';
import { HotelSearch } from './features/hotel-search/hotel-search';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'hotels',
    pathMatch: 'full'
  },

  {
    path: 'hotels',
    component: HotelSearch
  },
  {
    path: '**',
    redirectTo: 'hotels'
  }
];