import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { TimelineComponent } from './timeline/timeline.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'user/:id/edit',
    component: UserEditComponent
  },
  {
    path: 'timeline', component: TimelineComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'cadastrar', component: RegisterComponent
  },
  {
    path: '**', redirectTo: 'timeline'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
