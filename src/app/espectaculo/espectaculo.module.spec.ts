import { EspectaculoModule } from './espectaculo.module';

describe('EspectaculoModule', () => {
  let espectaculoModule: EspectaculoModule;

  beforeEach(() => {
    espectaculoModule = new EspectaculoModule();
  });

  it('should create an instance', () => {
    expect(espectaculoModule).toBeTruthy();
  });
});
