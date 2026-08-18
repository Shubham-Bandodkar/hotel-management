import { Routes } from '@angular/router';

import { HotelSearch } from './features/hotel-search/hotel-search';
import { HotelDetails } from './features/hotel-details/hotel-details';


import { HotelResolver } from './core/resolvers/hotel';
import { HotelHome } from './features/hotel-details/home/hotel-home/hotel-home';
import { HotelAbout } from './features/hotel-details/about/hotel-about/hotel-about';
import { HotelClassification } from './features/hotel-details/classification/hotel-classification/hotel-classification';
import { HotelProducts } from './features/hotel-details/products/hotel-products/hotel-products';
import { HotelFinance } from './features/hotel-details/finance/hotel-finance/hotel-finance';
import { HotelNotes } from './features/hotel-details/notes/hotel-notes/hotel-notes';
import { HotelTerms } from './features/hotel-details/terms/hotel-terms/hotel-terms';

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
    path: 'hotels/:id',
    component: HotelDetails,

    resolve: {
      hotel: HotelResolver
    },

    children: [

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },

      {
        path: 'home',
        component: HotelHome
      },

      {
        path: 'about',
        component: HotelAbout
      },

      {
        path: 'classification',
        component: HotelClassification
      },

      {
        path: 'products',
        component: HotelProducts
      },

      {
        path: 'terms',
        component: HotelTerms
      },

      {
        path: 'finance',
        component: HotelFinance
      },

      {
        path: 'notes',
        component: HotelNotes
      }

    ]
  }

];