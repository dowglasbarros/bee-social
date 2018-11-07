import { Component, OnInit } from '@angular/core';

const POSTS = [
  {
    "id": 1,
    "avatarPicture": "assets/images/avatar2.png",
    "avatarName": "John Doe",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "pictures": [
      {
        "src": "assets/images/lights.jpg",
        "alt": "Northern Lights"
      },
      {
        "src": "assets/images/nature.jpg",
        "alt": "Nature"
      }
    ],
    "likes": 3
  },
  {
    "id": 2,
    "avatarPicture": "assets/images/avatar5.png",
    "avatarName": "Jane Doe",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "pictures": [],
    "likes": 2
  },
  {
    "id": 3,
    "avatarPicture": "assets/images/avatar6.png",
    "avatarName": "Angie Jane",
    "description": "Have you seen this?",
    "pictures": [
      {
        "src": "assets/images/nature.jpg",
        "alt": "Nature"
      }
    ],
    "likes": 0
  },
];

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  posts = POSTS;

  constructor() { }

  ngOnInit() {
  }
  
  // Accordion
  showPhotos() {
    var x = document.getElementById("my-pictures");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      x.previousElementSibling.className += " w3-theme-d1";
    } 
    else {
      x.className = x.className.replace("w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
  }

}
