import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';//consumo json

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // consumo json
  // authenticate(): Observable<signIn[]> {
  //   console.log('antes de entrar na api', <signIn[]>)
  //   return this.http.get<signIn[]>(`${API_URL}/login`);


  authenticate(signIn: signIn) {
    console.log('antes de entrar na api', signIn)
    return this.http.post(`${API_URL}/login`, signIn);
  }
  // }

  signUpAdd(signUp: signUp) {
    console.log('antes de entrar na api', signUp)
    return this.http.post(`${API_URL}/register`, signUp);
  }

}