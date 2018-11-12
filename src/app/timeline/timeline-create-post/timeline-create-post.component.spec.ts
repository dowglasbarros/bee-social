import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TimelineCreatePostComponent } from './timeline-create-post.component';

describe('TimelineCreatePostComponent', () => {
  let component: TimelineCreatePostComponent;
  let fixture: ComponentFixture<TimelineCreatePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [TimelineCreatePostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineCreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a post', () => {
    const compiled = fixture.debugElement.nativeElement;
    let textPost = "Lorem ipsum";
    compiled.querySelector('#input-post').value = textPost;
    component.insertPost();
    expect(compiled.querySelector('#post-user-0 .list-posts-text p').textContent).toEqual(textPost);
  });

});
