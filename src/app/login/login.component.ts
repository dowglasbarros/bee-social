import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })   
  }
  
  login(){
    const emailLogin = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.authService
    .authenticate(emailLogin,password)
    .subscribe(
      () => console.log('autenticado'),
      err => {
        console.log(err);
      }
    )
  }

}
