import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersloginpageComponent } from './usersloginpage.component';

describe('UsersloginpageComponent', () => {
  let component: UsersloginpageComponent;
  let fixture: ComponentFixture<UsersloginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersloginpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersloginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
