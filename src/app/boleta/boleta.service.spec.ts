import { TestBed, inject } from '@angular/core/testing';

import { BoletaService } from './boleta.service';

describe('BoletaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoletaService]
    });
  });

  it('should be created', inject([BoletaService], (service: BoletaService) => {
    expect(service).toBeTruthy();
  }));
});
