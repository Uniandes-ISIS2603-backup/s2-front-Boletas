import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionCreateComponent } from './devolucion-create.component';

describe('DevolucionCreateComponent', () => {
  let component: DevolucionCreateComponent;
  let fixture: ComponentFixture<DevolucionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevolucionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
