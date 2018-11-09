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
        groupLabel: 'Angular',
        groupName: 'angular',
        follow: true
      },
      {
        groupId: 2,
        groupLabel: 'Caronas',
        groupName: 'caronas',
        follow: false
      },
      {
        groupId: 3,
        groupLabel: 'Moradia',
        groupName: 'moradia',
        follow: false
      },
      {
        groupId: 4,
        groupLabel: 'Node.js',
        groupName: 'nodejs',
        follow: true
      },
      {
        groupId: 5,
        groupLabel: 'React',
        groupName: 'react',
        follow: true
      },
      {
        groupId: 5,
        groupLabel: 'Tecnologia',
        groupName: 'tecnologia',
        follow: true
      }
      ],
    password: '',
    firstAccess: true
  }

  userPhoto = 'assets/images/avatar3.png';

  /* tratando o array de grupos */
  groupArray = this.user.groups.filter(function(group) {
    return group.follow;
  });
  groupLabels = this.groupArray.map(group => group.groupLabel).join(', ');

  constructor() { }

  ngOnInit() {
  }

}
