import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSlideIndicatorComponent } from './base-slide-indicator.component';

describe('BaseSlideIndicatorComponent', () => {
  let component: BaseSlideIndicatorComponent;
  let fixture: ComponentFixture<BaseSlideIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseSlideIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSlideIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
