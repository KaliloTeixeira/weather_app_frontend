import { TestBed } from '@angular/core/testing';

import { CityService } from './cityservice.service';

describe('CityserviceService', () => {
  let service: CityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityService);
  });

});
