import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletaEditComponent } from './boleta-edit.component';

describe('BoletaEditComponent', () => {
  let component: BoletaEditComponent;
  let fixture: ComponentFixture<BoletaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
