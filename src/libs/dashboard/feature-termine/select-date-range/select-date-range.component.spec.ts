import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDateRangeComponent } from './select-date-range.component';

describe('SelectDateRangeComponent', () => {
  let component: SelectDateRangeComponent;
  let fixture: ComponentFixture<SelectDateRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectDateRangeComponent]
    });
    fixture = TestBed.createComponent(SelectDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
