import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseModalHeaderComponent } from './base-modal-header.component';

describe('BaseModalHeaderComponent', () => {
  let component: BaseModalHeaderComponent;
  let fixture: ComponentFixture<BaseModalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseModalHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
