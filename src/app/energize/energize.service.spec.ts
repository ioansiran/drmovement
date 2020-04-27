import { TestBed } from '@angular/core/testing';

import { EnergizeService } from './energize.service';

describe('EnergizeService', () => {
  let service: EnergizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnergizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
