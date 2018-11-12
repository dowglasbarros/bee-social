import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/event-emitter.service';


const USER = {
  "name": "Natalia",
  "photo": "assets/images/avatar3.png",
  "email": "funcionario@avanade.com",
  "position": "Programador Senior",
  "city": "São Paulo",
  "cityWork": "São Paulo",
  "project": "Projeto 1"
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

  constructor(
  ) { }

  ngOnInit() {
  }

  getGroupId(event) {

    let groupName = event.srcElement.innerHTML;
    let shareWith = <HTMLElement>document.querySelector(".timeline-post-card h6");
    if (groupName == "Ver Todos") {
      shareWith.innerText = `Compartilhe no seu perfil`;
    } else {
      shareWith.innerHTML = `Compartilhe em <span id="activeGroup">${groupName}</span>`;
    }

    EventEmitterService.get('newPost').emit()
  }
}
