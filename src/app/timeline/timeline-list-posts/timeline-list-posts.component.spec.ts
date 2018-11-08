import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineListPostsComponent } from './timeline-list-posts.component';

describe('TimelineListPostsComponent', () => {
  let component: TimelineListPostsComponent;
  let fixture: ComponentFixture<TimelineListPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineListPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineListPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
