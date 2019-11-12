import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCardFooterComponent } from './base-card-footer.component';

describe('BaseCardFooterComponent', () => {
  let component: BaseCardFooterComponent;
  let fixture: ComponentFixture<BaseCardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCardFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
