import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SillaCreateComponent } from './silla-create.component';

describe('SillaCreateComponent', () => {
  let component: SillaCreateComponent;
  let fixture: ComponentFixture<SillaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SillaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SillaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
