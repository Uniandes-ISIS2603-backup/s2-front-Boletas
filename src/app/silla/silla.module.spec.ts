import { SillaModule } from './silla.module';

describe('SillaModule', () => {
  let sillaModule: SillaModule;

  beforeEach(() => {
    sillaModule = new SillaModule();
  });

  it('should create an instance', () => {
    expect(sillaModule).toBeTruthy();
  });
});
