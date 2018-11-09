import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user: User = {
    id: 0,
    name: 'Dowglas Barros',
    mail: 'colaborador@avanade.com',
    position: 'Programador Sênior',
    city: 'São Paulo',
    cityWork: 'São Paulo',
    project: 'Natura',
    groups: [
      {
        groupId: 1,
        groupName: 'Angular'
      },
      {
        groupId: 2,
        groupName: 'Node.js'
      }
      ],
    password: '',
    firstAccess: true
  }

  userPhoto = 'assets/images/avatar3.png';

  constructor() { }

  ngOnInit() {
  }

}
