import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSchuelerComponent } from './schueler-list.component';

describe('FeatureSchuelerComponent', () => {
  let component: FeatureSchuelerComponent;
  let fixture: ComponentFixture<FeatureSchuelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureSchuelerComponent]
    });
    fixture = TestBed.createComponent(FeatureSchuelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
