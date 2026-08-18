import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFinance } from './hotel-finance';

describe('HotelFinance', () => {
  let component: HotelFinance;
  let fixture: ComponentFixture<HotelFinance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelFinance],
    }).compileComponents();

    fixture = TestBed.createComponent(HotelFinance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
