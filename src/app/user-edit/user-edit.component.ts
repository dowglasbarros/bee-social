import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user = {
    name: 'Dowglas Barros',
    email: 'colaborador@avanade.com',
    photo: "assets/images/avatar3.png",
    position: 'Programador Sênior',
    city: 'São Paulo',
    company: 'São Paulo',
    project: 'Natura',
    groups: ['Angular', 'Node.js'],
    first_access: true
  }

  constructor() { }

  ngOnInit() {
  }

}
