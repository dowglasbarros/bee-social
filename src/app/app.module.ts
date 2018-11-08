import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { TimelineComponent } from './timeline/timeline.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { TimelineProfileComponent } from './timeline/timeline-profile/timeline-profile.component';
import { TimelineCreatePostComponent } from './timeline/timeline-create-post/timeline-create-post.component';
import { TimelineAlertBoxComponent } from './timeline/timeline-alert-box/timeline-alert-box.component';
import { TimelineListPostsComponent } from './timeline/timeline-list-posts/timeline-list-posts.component';
import { HttpClientModule } from '@angular/common/http';

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
    TimelineListPostsComponent,
    FooterComponent,
    TimelineAlertBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
