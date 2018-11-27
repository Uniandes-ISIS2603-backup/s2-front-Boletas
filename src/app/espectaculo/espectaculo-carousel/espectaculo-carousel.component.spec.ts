import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspectaculoCarouselComponent } from './espectaculo-carousel.component';

describe('EspectaculoCarouselComponent', () => {
  let component: EspectaculoCarouselComponent;
  let fixture: ComponentFixture<EspectaculoCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspectaculoCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspectaculoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
