import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrSignUpComponent } from './ingr-sign-up.component';

describe('IngrSignUpComponent', () => {
  let component: IngrSignUpComponent;
  let fixture: ComponentFixture<IngrSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngrSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngrSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
