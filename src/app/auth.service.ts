import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';//consumo json

const API_URL = 'http://localhost:3000/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //consumo json
  getAllJson(): Observable<Login[]> {
    return this.http.get<Login[]>(API_URL);
  }

  signUpAdd(signUp: Login) {
    return this.http.post(API_URL, signUp);
  }

}