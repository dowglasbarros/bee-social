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
    var x = document.getElementById("navMenu");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    }
    else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }

}
