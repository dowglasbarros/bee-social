import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-timeline-create-post',
  templateUrl: './timeline-create-post.component.html',
  styleUrls: ['./timeline-create-post.component.scss']
})
export class TimelineCreatePostComponent implements OnInit {

  post: Post = {
    id: 0,
    userId: 0,
    userName: '',
    avatarPicture: 'assets/images/avatar2.png',
    description: '',
    groupId: 0,
    pictures: {
      src: 'assets/images/lights.jpg',
      alt: 'Northern Lights',
    }
  }

  public value: string = ''


  constructor(
    private insertPostService: PostService
  ) { }

  ngOnInit() {
  }

  insertPost() {
    this.post.description = this.value
    this.post.userName = 'Felipe'

    this.insertPostService.addPost(this.post).subscribe(texto => {
      console.log(texto)
      window.location.reload(); // Provisorio - Alterar para carregar a rota
    })
  }

  public updateResponse(resp: Event): void {
    this.value = ((<HTMLInputElement>resp.target).value);
  }

}
