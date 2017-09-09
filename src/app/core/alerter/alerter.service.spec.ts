import { TestBed, inject } from '@angular/core/testing';

import { AlerterService } from './alerter.service';

describe('AlerterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlerterService]
    });
  });

  it('should be created', inject([AlerterService], (service: AlerterService) => {
    expect(service).toBeTruthy();
  }));
});
