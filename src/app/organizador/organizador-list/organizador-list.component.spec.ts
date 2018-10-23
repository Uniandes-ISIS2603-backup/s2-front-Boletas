import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {OrganizadorListComponent} from './organizador-list.component';

describe('OrganizadorListComponent', () => {
  let component: OrganizadorListComponent;
  let fixture: ComponentFixture<OrganizadorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizadorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
