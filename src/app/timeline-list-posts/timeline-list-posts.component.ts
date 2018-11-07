import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timeline-list-posts',
  templateUrl: './timeline-list-posts.component.html',
  styleUrls: ['./timeline-list-posts.component.scss']
})
export class TimelineListPostsComponent implements OnInit {

  public posts;

  constructor(
    private postService: PostService,
  ) {

    this.postService.getPost().subscribe(posts => {
      this.posts = posts.reverse()
    })
  }

  ngOnInit() {
  }


}
