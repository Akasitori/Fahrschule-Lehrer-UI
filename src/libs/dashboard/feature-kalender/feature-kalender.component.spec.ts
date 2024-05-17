import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureKalenderComponent } from './feature-kalender.component';

describe('FeatureKalenderComponent', () => {
  let component: FeatureKalenderComponent;
  let fixture: ComponentFixture<FeatureKalenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureKalenderComponent]
    });
    fixture = TestBed.createComponent(FeatureKalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
