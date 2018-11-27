import { DevolucionModule } from './devolucion.module';

describe('DevolucionModule', () => {
  let devolucionModule: DevolucionModule;

  beforeEach(() => {
    devolucionModule = new DevolucionModule();
  });

  it('should create an instance', () => {
    expect(devolucionModule).toBeTruthy();
  });
});
