import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SillaListComponent } from './silla-list.component';

describe('SillaListComponent', () => {
  let component: SillaListComponent;
  let fixture: ComponentFixture<SillaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SillaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SillaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
