import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SillaDetailComponent } from './silla-detail.component';

describe('SillaDetailComponent', () => {
  let component: SillaDetailComponent;
  let fixture: ComponentFixture<SillaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SillaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SillaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
