import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDropdownMenuComponent } from './base-dropdown-menu.component';

describe('BaseDropdownMenuComponent', () => {
  let component: BaseDropdownMenuComponent;
  let fixture: ComponentFixture<BaseDropdownMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDropdownMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
