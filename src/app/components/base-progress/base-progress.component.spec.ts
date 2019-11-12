import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseProgressComponent } from './base-progress.component';

describe('BaseProgressComponent', () => {
  let component: BaseProgressComponent;
  let fixture: ComponentFixture<BaseProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
