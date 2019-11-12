import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCardHeaderComponent } from './base-card-header.component';

describe('BaseCardHeaderComponent', () => {
  let component: BaseCardHeaderComponent;
  let fixture: ComponentFixture<BaseCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
