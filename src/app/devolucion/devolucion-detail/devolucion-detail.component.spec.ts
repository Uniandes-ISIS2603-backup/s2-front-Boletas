import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionDetailComponent } from './devolucion-detail.component';

describe('DevolucionDetailComponent', () => {
  let component: DevolucionDetailComponent;
  let fixture: ComponentFixture<DevolucionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevolucionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
