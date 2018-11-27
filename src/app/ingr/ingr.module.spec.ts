import { IngrModule } from './ingr.module';

describe('IngrModule', () => {
  let ingrModule: IngrModule;

  beforeEach(() => {
    ingrModule = new IngrModule();
  });

  it('should create an instance', () => {
    expect(ingrModule).toBeTruthy();
  });
});
