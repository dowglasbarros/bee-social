import { Component, OnInit, EventEmitter } from '@angular/core';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { TimelineCreatePostComponent } from '../timeline-create-post/timeline-create-post.component';
import { EventEmitterService } from '../event-emitter.service';


@Component({
  selector: 'app-timeline-list-posts',
  templateUrl: './timeline-list-posts.component.html',
  styleUrls: ['./timeline-list-posts.component.scss']
})
export class TimelineListPostsComponent implements OnInit {

  public posts

  constructor(
    private postService: PostService,
  ) {
    EventEmitterService.get('newPost').subscribe(data =>
      this.loadPosts())
  }

  ngOnInit() {
    this.loadPosts()
  }

  loadPosts() {
    this.postService.getPost().subscribe(posts => {
      this.posts = posts.reverse()
    })
  }
}
