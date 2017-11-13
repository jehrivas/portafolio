import { TestBed, inject } from '@angular/core/testing';

import { FreecodecampTalksService } from './freecodecamp-talks.service';

describe('FreecodecampTalksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FreecodecampTalksService]
    });
  });

  it('should be created', inject([FreecodecampTalksService], (service: FreecodecampTalksService) => {
    expect(service).toBeTruthy();
  }));
});
