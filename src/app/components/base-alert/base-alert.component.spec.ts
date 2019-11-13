import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseAlertComponent } from './base-alert.component';

describe('BaseAlertComponent', () => {
  let component: BaseAlertComponent;
  let fixture: ComponentFixture<BaseAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
