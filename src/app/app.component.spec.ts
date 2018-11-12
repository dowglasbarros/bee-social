import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

let btnLogin: DebugElement;
let email: DebugElement;
let password: DebugElement;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        NavComponent,
        FooterComponent,
        LoginComponent
      ],
    }).compileComponents();

  }));
});
