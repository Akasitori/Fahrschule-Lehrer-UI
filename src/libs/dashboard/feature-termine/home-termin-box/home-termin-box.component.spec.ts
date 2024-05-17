import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTerminBoxComponent } from './home-termin-box.component';

describe('HomeTerminBoxComponent', () => {
  let component: HomeTerminBoxComponent;
  let fixture: ComponentFixture<HomeTerminBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTerminBoxComponent]
    });
    fixture = TestBed.createComponent(HomeTerminBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
