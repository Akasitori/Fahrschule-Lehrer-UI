import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeueSchuelerFeedcardComponent } from './neue-schueler-feedcard.component';

describe('NeueSchuelerFeedcardComponent', () => {
  let component: NeueSchuelerFeedcardComponent;
  let fixture: ComponentFixture<NeueSchuelerFeedcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeueSchuelerFeedcardComponent]
    });
    fixture = TestBed.createComponent(NeueSchuelerFeedcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
