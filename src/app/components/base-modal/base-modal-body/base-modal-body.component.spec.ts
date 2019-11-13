import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseModalBodyComponent } from './base-modal-body.component';

describe('BaseModalBodyComponent', () => {
  let component: BaseModalBodyComponent;
  let fixture: ComponentFixture<BaseModalBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseModalBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseModalBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
