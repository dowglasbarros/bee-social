import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineAlertBoxComponent } from './timeline-alert-box.component';

describe('TimelineAlertBoxComponent', () => {
  let component: TimelineAlertBoxComponent;
  let fixture: ComponentFixture<TimelineAlertBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineAlertBoxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineAlertBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
