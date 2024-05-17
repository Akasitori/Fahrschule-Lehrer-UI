import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureLehrerDatenComponent } from './lehrer-kontaktdaten.component';

describe('FeatureLehrerDatenComponent', () => {
  let component: FeatureLehrerDatenComponent;
  let fixture: ComponentFixture<FeatureLehrerDatenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureLehrerDatenComponent]
    });
    fixture = TestBed.createComponent(FeatureLehrerDatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
