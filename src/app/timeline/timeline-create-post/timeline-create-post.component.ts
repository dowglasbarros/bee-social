import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { EventEmitterService } from '../../event-emitter.service';

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
    pictures: [{
      src: '',
      alt: '',
    }]
  }

  public value: string = ''
  private file: string = '';

  constructor(
    private insertPostService: PostService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  insertPost() {
    this.insertFields()

    this.insertPostService.addPost(this.post).subscribe(texto => {
      EventEmitterService.get('newPost').emit()
    })
  }

  insertFields() {
    this.post.description = this.value
    this.post.userName = 'Felipe'
    this.post.pictures[0].src = this.file
  }

  onFileChanged(event) {
    this.file = event.target.files[0]
    console.log(this.file)
  }


  public updateResponse(resp: Event): void {
    this.value = ((<HTMLInputElement>resp.target).value);
  }


}
