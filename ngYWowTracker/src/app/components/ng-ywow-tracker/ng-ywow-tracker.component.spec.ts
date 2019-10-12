import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgYWowTrackerComponent } from './ng-ywow-tracker.component';

describe('NgYWowTrackerComponent', () => {
  let component: NgYWowTrackerComponent;
  let fixture: ComponentFixture<NgYWowTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgYWowTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgYWowTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
