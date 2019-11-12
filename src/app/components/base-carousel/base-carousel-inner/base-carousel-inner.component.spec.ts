import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCarouselInnerComponent } from './base-carousel-inner.component';

describe('BaseCarouselInnerComponent', () => {
  let component: BaseCarouselInnerComponent;
  let fixture: ComponentFixture<BaseCarouselInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCarouselInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCarouselInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
