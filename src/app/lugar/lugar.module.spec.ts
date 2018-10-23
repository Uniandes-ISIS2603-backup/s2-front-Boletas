import { LugarModule } from './lugar.module';

describe('LugarModule', () => {
  let lugarModule: LugarModule;

  beforeEach(() => {
    lugarModule = new LugarModule();
  });

  it('should create an instance', () => {
    expect(lugarModule).toBeTruthy();
  });
});
