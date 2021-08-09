import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRoomsdetailsComponent } from './view-roomsdetails.component';

describe('ViewRoomsdetailsComponent', () => {
  let component: ViewRoomsdetailsComponent;
  let fixture: ComponentFixture<ViewRoomsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRoomsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRoomsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
