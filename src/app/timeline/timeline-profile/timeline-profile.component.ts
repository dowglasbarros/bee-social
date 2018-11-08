import { Component, OnInit } from '@angular/core';

const USER = '';

@Component({
  selector: 'app-timeline-profile',
  templateUrl: './timeline-profile.component.html',
  styleUrls: ['./timeline-profile.component.scss']
})
export class TimelineProfileComponent implements OnInit {

  user = USER;
  photos = '';
  groups = '';

  constructor() { }

  ngOnInit() {
  }

  showTextMenu() {
    // var x = document.getElementById("my-groups");
    // if (x.className.indexOf("w3-show") == -1) {
    //   x.className += " w3-show";
    //   x.previousElementSibling.className += " w3-theme-d1";
    // } else {
    //   x.className = x.className.replace("w3-show", "");
    //   x.previousElementSibling.className =
    //     x.previousElementSibling.className.replace(" w3-theme-d1", "");
    // }
  }

  showPhotos() {
    // var x = document.getElementById("my-pictures");
    // if (x.className.indexOf("w3-show") == -1) {
    //   x.className += " w3-show";
    //   x.previousElementSibling.className += " w3-theme-d1";
    // }
    // else {
    //   x.className = x.className.replace("w3-show", "");
    //   x.previousElementSibling.className =
    //     x.previousElementSibling.className.replace(" w3-theme-d1", "");
    // }
  }

}
