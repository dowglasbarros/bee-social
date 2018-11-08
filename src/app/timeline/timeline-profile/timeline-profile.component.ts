import { Component, OnInit } from '@angular/core';

const USER = {
  "name": "Nome do funcionário",
  "photo": "assets/images/avatar3.png",
  "email": "funcionario@avanade.com",
  "ocupation": "Programador Senior",
  "location": "São Paulo/SP",
  "birthday": "15 de Novembro de 1988"
}

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

  user = USER;
  photos = PHOTOS;
  groups = GROUPS;

  constructor() { }

  ngOnInit() {
  }

  showTextMenu() {
    var myGroups = document.getElementById("my-groups");
    if (myGroups.className.indexOf("w3-show") == -1) {
      myGroups.className += " w3-show";
      myGroups.previousElementSibling.className += " w3-theme-d1";
    } else {
      myGroups.className = myGroups.className.replace("w3-show", "");
      myGroups.previousElementSibling.className =
        myGroups.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
  }

  showPhotos() {
    var myPictures = document.getElementById("my-pictures");
    if (myPictures.className.indexOf("w3-show") == -1) {
      myPictures.className += " w3-show";
      myPictures.previousElementSibling.className += " w3-theme-d1";
    }
    else {
      myPictures.className = myPictures.className.replace("w3-show", "");
      myPictures.previousElementSibling.className =
        myPictures.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
  }

}
