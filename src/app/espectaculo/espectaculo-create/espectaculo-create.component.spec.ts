import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspectaculoCreateComponent } from './espectaculo-create.component';

describe('EspectaculoCreateComponent', () => {
  let component: EspectaculoCreateComponent;
  let fixture: ComponentFixture<EspectaculoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspectaculoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspectaculoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
