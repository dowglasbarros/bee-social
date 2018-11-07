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

  login: Login[] = [];//consumo json

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { 

      /*parte json */
      authService.getAllJson().subscribe((login) => {
        this.login = login;
        console.log(login[0].first_access);
        router.navigateByUrl(`user/${login[0].id}/edit`)     
       });      
    }

 
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })   
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
