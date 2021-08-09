import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsDialogComponent } from './staffs-dialog.component';

describe('StaffsDialogComponent', () => {
  let component: StaffsDialogComponent;
  let fixture: ComponentFixture<StaffsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
