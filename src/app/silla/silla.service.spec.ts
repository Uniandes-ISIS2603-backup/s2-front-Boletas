import { TestBed } from '@angular/core/testing';

import { SillaService } from './silla.service';

describe('SillaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SillaService = TestBed.get(SillaService);
    expect(service).toBeTruthy();
  });
});
