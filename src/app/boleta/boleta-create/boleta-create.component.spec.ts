import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletaCreateComponent } from './boleta-create.component';

describe('BoletaCreateComponent', () => {
  let component: BoletaCreateComponent;
  let fixture: ComponentFixture<BoletaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
