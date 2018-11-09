import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';//consumo json

const API_URL = 'http://localhost:3000/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  //consumo api
  authenticate(email: string, password: string){

    return this.http.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAkL4tLSW1FeRv7qzI3UdsoXpl7FdU84V0`, {email, password});

  }


  //consumo json
  getAllJson(): Observable<Login[]>{
    return this.http.get<Login[]>(API_URL);
  }

  signUpAdd(signUpForm: SignUp){
    return this.http.post(API_URL, signUpForm);
  }

}