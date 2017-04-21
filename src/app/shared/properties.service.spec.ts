import { TestBed, inject } from '@angular/core/testing';

import { PropertiesService } from './properties.service';

describe('PropertiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertiesService]
    });
  });

  it('should ...', inject([PropertiesService], (service: PropertiesService) => {
    expect(service).toBeTruthy();
  }));
});
