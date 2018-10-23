import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletaDetailComponent } from './boleta-detail.component';

describe('BoletaDetailComponent', () => {
  let component: BoletaDetailComponent;
  let fixture: ComponentFixture<BoletaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
