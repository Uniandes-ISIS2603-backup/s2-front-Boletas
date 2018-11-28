import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraBoletasComponent } from './compra-boletas.component';

describe('CompraBoletasComponent', () => {
  let component: CompraBoletasComponent;
  let fixture: ComponentFixture<CompraBoletasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraBoletasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraBoletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
