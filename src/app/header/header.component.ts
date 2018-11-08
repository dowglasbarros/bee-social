import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Used to toggle the menu on smaller screens when clicking on the menu button
  openNav() {
    var navMenu = document.getElementById("navMenu");
    if (navMenu.className.indexOf("w3-show") == -1) {
      navMenu.className += " w3-show";
    }
    else { 
      navMenu.className = navMenu.className.replace(" w3-show", "");
    }
  }

}
