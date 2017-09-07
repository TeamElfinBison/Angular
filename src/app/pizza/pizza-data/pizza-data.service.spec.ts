import { TestBed, inject } from '@angular/core/testing';

import { PizzaDataService } from './pizza-data.service';

describe('PizzaDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaDataService]
    });
  });

  it('should be created', inject([PizzaDataService], (service: PizzaDataService) => {
    expect(service).toBeTruthy();
  }));
});
