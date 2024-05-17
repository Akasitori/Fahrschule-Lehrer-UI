import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchuelerKontaktdatenComponent } from './schueler-kontaktdaten.component';

describe('SchuelerKontaktdatenComponent', () => {
  let component: SchuelerKontaktdatenComponent;
  let fixture: ComponentFixture<SchuelerKontaktdatenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchuelerKontaktdatenComponent]
    });
    fixture = TestBed.createComponent(SchuelerKontaktdatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
