import { TestBed } from '@angular/core/testing';

import { TrainDelayService } from './train-delay.service';

describe('TrainDelayService', () => {
  let service: TrainDelayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainDelayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
