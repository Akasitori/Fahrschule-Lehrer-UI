import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchuelerFeedcardComponent } from './schueler-feedcard.component';

describe('SchuelerFeedcardComponent', () => {
  let component: SchuelerFeedcardComponent;
  let fixture: ComponentFixture<SchuelerFeedcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchuelerFeedcardComponent]
    });
    fixture = TestBed.createComponent(SchuelerFeedcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
