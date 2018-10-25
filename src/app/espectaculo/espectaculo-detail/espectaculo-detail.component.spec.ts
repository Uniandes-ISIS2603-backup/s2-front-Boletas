import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspectaculoDetailComponent } from './espectaculo-detail.component';

describe('EspectaculoDetailComponent', () => {
  let component: EspectaculoDetailComponent;
  let fixture: ComponentFixture<EspectaculoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspectaculoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspectaculoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
