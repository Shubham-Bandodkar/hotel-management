import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelHome } from './hotel-home';

describe('HotelHome', () => {
  let component: HotelHome;
  let fixture: ComponentFixture<HotelHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelHome],
    }).compileComponents();

    fixture = TestBed.createComponent(HotelHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
