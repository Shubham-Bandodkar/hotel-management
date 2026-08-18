import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelClassification } from './hotel-classification';

describe('HotelClassification', () => {
  let component: HotelClassification;
  let fixture: ComponentFixture<HotelClassification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelClassification],
    }).compileComponents();

    fixture = TestBed.createComponent(HotelClassification);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
