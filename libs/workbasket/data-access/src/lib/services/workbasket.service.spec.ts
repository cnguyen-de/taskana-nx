import { TestBed } from '@angular/core/testing';

import { WorkbasketService } from './workbasket.service';

describe('WorkbasketService', () => {
  let service: WorkbasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkbasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
