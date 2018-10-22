import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraDetailComponent } from './compra-detail.component';

describe('CompraDetailComponent', () => {
  let component: CompraDetailComponent;
  let fixture: ComponentFixture<CompraDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
