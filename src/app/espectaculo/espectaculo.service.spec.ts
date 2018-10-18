import { TestBed } from '@angular/core/testing';

import { EspectaculoService } from './espectaculo.service';

describe('EspectaculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EspectaculoService = TestBed.get(EspectaculoService);
    expect(service).toBeTruthy();
  });
});
