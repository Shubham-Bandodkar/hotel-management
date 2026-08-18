import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelProducts } from './hotel-products';

describe('HotelProducts', () => {
  let component: HotelProducts;
  let fixture: ComponentFixture<HotelProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelProducts],
    }).compileComponents();

    fixture = TestBed.createComponent(HotelProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
