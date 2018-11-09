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
  /*parte json */
  signIn() {

    const getEmailSignIn = this.signInData.email;

    this.authService.getAllJson().subscribe((value) => {

      const loginData = value.filter(function (el) {
        return el.email == getEmailSignIn;
      });

      const isFirstAccess = loginData[0].firstAccess;

      isFirstAccess ?
        this.router.navigateByUrl(`user/${value[0].id}/edit`) :
        this.router.navigateByUrl(`timeline`)

    });
  }
  /*consume api*/
  // login(){
  //   const emailLogin = this.loginForm.get('email').value;
  //   const password = this.loginForm.get('password').value;

  //   this.authService
  //   .authenticate(emailLogin,password)
  //   .subscribe(
  //     () => console.log('autenticado'),
  //     err => {
  //       console.log(err);
  //     }
  //   )
  // }

}
