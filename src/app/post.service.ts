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

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.URL);
  }

  // onUpload(photo) {
  //   const uploadData = new FormData();
  //   uploadData.append('myFile', photo, photo.name )
  //   return this.http.post(this.URL, uploadData)
  // }

  getPostUser(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(this.URL); //Alterar URL para receber o parametro do userID
  }

  getPostGroup(nameGroup: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.URL}/${nameGroup}`); //Alterar URL para receber o parametro do userGroup
  }


}
