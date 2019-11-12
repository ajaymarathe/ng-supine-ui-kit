import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCarouselCaptionComponent } from './base-carousel-caption.component';

describe('BaseCarouselCaptionComponent', () => {
  let component: BaseCarouselCaptionComponent;
  let fixture: ComponentFixture<BaseCarouselCaptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCarouselCaptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCarouselCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
