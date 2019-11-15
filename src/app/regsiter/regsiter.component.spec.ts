import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsiterComponent } from './regsiter.component';

describe('RegsiterComponent', () => {
  let component: RegsiterComponent;
  let fixture: ComponentFixture<RegsiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegsiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegsiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
