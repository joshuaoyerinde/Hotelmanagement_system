import { TestBed } from '@angular/core/testing';

import { BookRoomsService } from './book-rooms.service';

describe('BookRoomsService', () => {
  let service: BookRoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRoomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
