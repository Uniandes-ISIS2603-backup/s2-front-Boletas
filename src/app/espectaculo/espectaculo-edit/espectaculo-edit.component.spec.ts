import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspectaculoEditComponent } from './espectaculo-edit.component';

describe('EspectaculoEditComponent', () => {
  let component: EspectaculoEditComponent;
  let fixture: ComponentFixture<EspectaculoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspectaculoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspectaculoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
