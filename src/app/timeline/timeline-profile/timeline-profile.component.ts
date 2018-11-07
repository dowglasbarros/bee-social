import { Component, OnInit } from '@angular/core';

const GROUPS = [
  {
    "id": 1,
    "name": "Moradia"
  },
  {
    "id": 2,
    "name": "Transporte"
  },
  {
    "id": 3,
    "name": "Estudos"
  },
  {
    "id": 4,
    "name": "Alimentação"
  }
];

const PHOTOS = [
  {
    "id": 1,
    "src": "assets/images/lights.jpg",
    "alt": "photo of lights"
  },
  {
    "id": 2,
    "src": "assets/images/nature.jpg",
    "alt": "photo of narute"
  },
  {
    "id": 3,
    "src": "assets/images/mountains.jpg",
    "alt": "photo of mountains"
  },
  {
    "id": 4,
    "src": "assets/images/forest.jpg",
    "alt": "photo of forest"
  },
  {
    "id": 5,
    "src": "assets/images/nature.jpg",
    "alt": "photo of nature"
  },
  {
    "id": 6,
    "src": "assets/images/snow.jpg",
    "alt": "photo of snow"
  }
];

@Component({
  selector: 'app-timeline-profile',
  templateUrl: './timeline-profile.component.html',
  styleUrls: ['./timeline-profile.component.scss']
})
export class TimelineProfileComponent implements OnInit {

  photos = PHOTOS;
  groups = GROUPS;

  constructor() { }

  ngOnInit() {
  }

  showTextMenu() {
    var x = document.getElementById("my-groups");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      x.previousElementSibling.className += " w3-theme-d1";
    } else {
      x.className = x.className.replace("w3-show", "");
      x.previousElementSibling.className =
        x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
  }

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
