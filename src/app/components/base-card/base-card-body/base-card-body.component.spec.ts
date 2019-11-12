import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCardBodyComponent } from './base-card-body.component';

describe('BaseCardBodyComponent', () => {
  let component: BaseCardBodyComponent;
  let fixture: ComponentFixture<BaseCardBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCardBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
