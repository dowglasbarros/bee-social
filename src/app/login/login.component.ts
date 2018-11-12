import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInData: Login = {
    id: 0,
    email: '',
    password: '',
    confirmPassword: '',
    firstAccess: true,
    activeUser: true,
    admin: false
  }


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  ngOnInit() {

  }

  setEmail(email) {
    this.signInData.email = email;
  }

  setPassword(password) {
    this.signInData.password = password;
  }

  setConfirmationPassword(password) {
    this.signInData.confirmPassword = password;
  }

  signIn() {

    const getEmailSignIn = this.signInData.email;
    this.authService.getAllJson().subscribe((value) => {
      const loginData = value.filter(function (el) {
        return el.email == getEmailSignIn;
      });
      const isFirstAccess = loginData[0].firstAccess;
      isFirstAccess ?
        this.router.navigateByUrl(`user/${loginData[0].id}`) :
        this.router.navigateByUrl(`timeline`)

    });
  }
}
