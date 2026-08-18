import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAbout } from './hotel-about';

describe('HotelAbout', () => {
  let component: HotelAbout;
  let fixture: ComponentFixture<HotelAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(HotelAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
