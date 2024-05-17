import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminBoxComponent } from './termin-box.component';

describe('TerminBoxComponent', () => {
  let component: TerminBoxComponent;
  let fixture: ComponentFixture<TerminBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerminBoxComponent]
    });
    fixture = TestBed.createComponent(TerminBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
