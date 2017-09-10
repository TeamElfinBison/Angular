import { TestBed, inject } from '@angular/core/testing';

import { CustompizzaResolverService } from './custompizza-resolver.service';

describe('CustompizzaResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustompizzaResolverService]
    });
  });

  it('should be created', inject([CustompizzaResolverService], (service: CustompizzaResolverService) => {
    expect(service).toBeTruthy();
  }));
});
