import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  URL = 'http://localhost:3000/posts'

  constructor(
    private http: HttpClient
  ) { }

  addPost(post: Post) {
    return this.http.post(this.URL, post);
  }

  getPost() : Observable<Post[]> {
    return this.http.get<Post[]>(this.URL);
  }

  //getPostUser
  //getPostGroup


}
