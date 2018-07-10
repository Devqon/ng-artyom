import { TestBed, inject } from '@angular/core/testing';

import { NgArtyomService } from './artyom.service';

describe('NgArtyomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgArtyomService]
    });
  });

  it('should be created', inject([NgArtyomService], (service: NgArtyomService) => {
    expect(service).toBeTruthy();
  }));
});
