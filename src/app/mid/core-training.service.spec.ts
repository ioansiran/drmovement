import { TestBed } from '@angular/core/testing';

import { CoreTrainingService } from './core-training.service';

describe('CoreTrainingService', () => {
  let service: CoreTrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreTrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
