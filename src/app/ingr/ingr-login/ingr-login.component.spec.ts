import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrLoginComponent } from './ingr-login.component';

describe('IngrLoginComponent', () => {
  let component: IngrLoginComponent;
  let fixture: ComponentFixture<IngrLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngrLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngrLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
