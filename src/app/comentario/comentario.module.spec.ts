import { ComentarioModule } from './comentario.module';

describe('ComentarioModule', () => {
  let comentarioModule: ComentarioModule;

  beforeEach(() => {
    comentarioModule = new ComentarioModule();
  });

  it('should create an instance', () => {
    expect(comentarioModule).toBeTruthy();
  });
});
