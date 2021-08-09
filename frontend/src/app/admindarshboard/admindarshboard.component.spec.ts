import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindarshboardComponent } from './admindarshboard.component';

describe('AdmindarshboardComponent', () => {
  let component: AdmindarshboardComponent;
  let fixture: ComponentFixture<AdmindarshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindarshboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindarshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
