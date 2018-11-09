import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //signUpForm: FormGroup;

  signUpData: SignUp = {
    id: 0,
    emailSignUp: '',
    passwordSignUp: '',
    confirmPasswordSignUp: '',
    firstAccessSignUp: true,
    activeUserSignUp: true,
    adminSignUp: false
}


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }


    signUpAdd(){
      this.authService.signUpAdd(this.signUpData).subscribe(value => {
        console.log(value);
        alert('Adicionado com sucesso');
  
       // this.router.navigateByUrl('/todos');
      }, error => {
        alert('Erro ao adicionar');
      });
    }
 

}
