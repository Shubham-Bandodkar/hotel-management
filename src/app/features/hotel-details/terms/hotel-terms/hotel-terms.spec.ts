import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelTerms } from './hotel-terms';

describe('HotelTerms', () => {
  let component: HotelTerms;
  let fixture: ComponentFixture<HotelTerms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelTerms],
    }).compileComponents();

    fixture = TestBed.createComponent(HotelTerms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
