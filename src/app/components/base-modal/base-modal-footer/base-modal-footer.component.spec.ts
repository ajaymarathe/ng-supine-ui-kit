import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseModalFooterComponent } from './base-modal-footer.component';

describe('BaseModalFooterComponent', () => {
  let component: BaseModalFooterComponent;
  let fixture: ComponentFixture<BaseModalFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseModalFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseModalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
