import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelNotes } from './hotel-notes';

describe('HotelNotes', () => {
  let component: HotelNotes;
  let fixture: ComponentFixture<HotelNotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelNotes],
    }).compileComponents();

    fixture = TestBed.createComponent(HotelNotes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
