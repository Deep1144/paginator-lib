import { TestBed } from '@angular/core/testing';

import { DePaginatorService } from './de-paginator.service';

describe('DePaginatorService', () => {
  let service: DePaginatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DePaginatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
