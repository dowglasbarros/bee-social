import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInData: signIn = {
    email: '',
    password: '',
  }


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  ngOnInit() {

  }

  signIn() {

    this.authService
      .authenticate(this.signInData)
      .subscribe(
        value => {
          if (value === null) {
            alert('Login ou senha inválidos')
          } else {
            value['firstAccess'] === true ?
              this.router.navigateByUrl(`user/1`) :
              this.router.navigateByUrl(`timeline`);
          }
        },

        err => {
          console.log(err);
        }
      )

    // const getEmailSignIn = this.signInData.email;
    // this.authService.getAllJson().subscribe((value) => {
    //   const loginData = value.filter(function (el) {
    //     return el.email == getEmailSignIn;
    //   });
    //   const isFirstAccess = loginData[0].firstAccess;
    //   isFirstAccess ?
    //     this.router.navigateByUrl(`user/${loginData[0].id}`) :
    //     this.router.navigateByUrl(`timeline`)

    // });
  }
}
