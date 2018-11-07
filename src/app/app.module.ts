import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { TimelineComponent } from './timeline/timeline.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TimelineProfileComponent } from './timeline-profile/timeline-profile.component';
import { TimelineCreatePostComponent } from './timeline-create-post/timeline-create-post.component';
import { TimelineAlertBoxComponent } from './timeline-alert-box/timeline-alert-box.component';
import { TimelineListPostsComponent } from './timeline-list-posts/timeline-list-posts.component';

import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserEditComponent,
    TimelineComponent,
    LoginComponent,
    RegisterComponent,
    TimelineProfileComponent,
    TimelineCreatePostComponent,
    TimelineAlertBoxComponent,
    TimelineListPostsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
