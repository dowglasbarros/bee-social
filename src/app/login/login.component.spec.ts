import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { TimelineProfileComponent } from '../timeline/timeline-profile/timeline-profile.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      declarations: [LoginComponent, TimelineProfileComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should put email and password and redirect to timeline', () => {
    let fixtureTimelineProfile = TestBed.createComponent(TimelineProfileComponent);
    let componentTimelineProfile = fixtureTimelineProfile.componentInstance;
    fixtureTimelineProfile.detectChanges();
    const compiled = fixtureTimelineProfile.debugElement.nativeElement;
    let email = "teste2@teste.com";
    let password = '123456';
    component.setEmail(email);
    component.setPassword(password);
    component.setConfirmationPassword(password);
    component.signIn();
    expect(compiled.querySelector('#user-email').textContent).toEqual(email);
  });
});
