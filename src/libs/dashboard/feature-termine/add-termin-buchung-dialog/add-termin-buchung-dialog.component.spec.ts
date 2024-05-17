import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTerminBuchungDialogComponent } from './add-termin-buchung-dialog.component';

describe('AddTerminBuchungDialogComponent', () => {
  let component: AddTerminBuchungDialogComponent;
  let fixture: ComponentFixture<AddTerminBuchungDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTerminBuchungDialogComponent]
    });
    fixture = TestBed.createComponent(AddTerminBuchungDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
