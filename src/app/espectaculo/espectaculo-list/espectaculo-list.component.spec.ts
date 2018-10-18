import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspectaculoListComponent } from './espectaculo-list.component';

describe('EspectaculoListComponent', () => {
  let component: EspectaculoListComponent;
  let fixture: ComponentFixture<EspectaculoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspectaculoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspectaculoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
