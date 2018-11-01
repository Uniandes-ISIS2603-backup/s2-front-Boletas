import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizadorDetailComponent } from './organizador-detail.component';

describe('OrganizadorDetailComponent', () => {
  let component: OrganizadorDetailComponent;
  let fixture: ComponentFixture<OrganizadorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizadorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizadorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
