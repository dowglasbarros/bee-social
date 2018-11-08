import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  loginData: Login[] = [];//consumo json

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {}

 
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })   
  }
        /*parte json */
        login(){
          this.authService.getAllJson().subscribe((loginData) => {
            this.loginData = loginData;
            console.log(loginData[0].first_access);
            this.router.navigateByUrl(`user/${loginData[0].id}/edit`)     
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
