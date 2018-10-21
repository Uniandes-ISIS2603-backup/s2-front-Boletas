import { BoletaModule } from './boleta.module';

describe('BoletaModule', () => {
  let boletaModule: BoletaModule;

  beforeEach(() => {
    boletaModule = new BoletaModule();
  });

  it('should create an instance', () => {
    expect(boletaModule).toBeTruthy();
  });
});
