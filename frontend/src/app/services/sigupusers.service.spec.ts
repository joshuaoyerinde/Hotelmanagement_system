import { TestBed } from '@angular/core/testing';

import { SigupusersService } from './sigupusers.service';

describe('SigupusersService', () => {
  let service: SigupusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigupusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
