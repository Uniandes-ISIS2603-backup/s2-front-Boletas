import { TestBed, inject } from '@angular/core/testing';

import { LugarService } from './lugar.service';

describe('LugarService', () => {
  beforeEach(() => {
  TestBed.configureTestingModule({
      providers: [LugarService]
  })
  });

  it('should be created', inject([LugarService], (service:LugarService) => {
    expect(service).toBeTruthy();
  }));
});
