import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletaListComponent } from './boleta-list.component';

describe('BoletaListComponent', () => {
  let component: BoletaListComponent;
  let fixture: ComponentFixture<BoletaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
