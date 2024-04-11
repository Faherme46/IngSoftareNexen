import { TestBed } from '@angular/core/testing';

import { NexenService } from './nexen.service';

describe('NexenService', () => {
  let service: NexenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NexenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
