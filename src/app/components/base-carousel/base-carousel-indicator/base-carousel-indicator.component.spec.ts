import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCarouselIndicatorComponent } from './base-carousel-indicator.component';

describe('BaseCarouselIndicatorComponent', () => {
  let component: BaseCarouselIndicatorComponent;
  let fixture: ComponentFixture<BaseCarouselIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCarouselIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCarouselIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
