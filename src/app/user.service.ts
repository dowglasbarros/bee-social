import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = 'http://localhost:3000/user';

  constructor(
    private http: HttpClient
  ) { }

  getUser(id: number): Observable<User> {
    return this.http.get<User>('http://localhost:3000/user/' + id);
  }

  updateUser(user): Observable<User> {
    return this.http.put<User>('http://localhost:3000/user/' + user.id, user);
  }
}
