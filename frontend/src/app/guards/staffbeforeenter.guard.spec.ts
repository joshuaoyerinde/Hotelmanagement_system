import { TestBed } from '@angular/core/testing';

import { StaffbeforeenterGuard } from './staffbeforeenter.guard';

describe('StaffbeforeenterGuard', () => {
  let guard: StaffbeforeenterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StaffbeforeenterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
