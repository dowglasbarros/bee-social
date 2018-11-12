import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user: User = {
    id: 0,
    name: '',
    mail: '',
    position: '',
    city: '',
    cityWork: '',
    project: '',
    groups: [],
    password: '',
    firstAccess: true
  }

  userPhoto = 'assets/images/avatar3.png';

  /* tratando o array de grupos */
  groupArray = this.user.groups.filter(function (group) {
    return group.follow;
  });
  groupLabels = this.groupArray.map(group => group.groupLabel).join(', ');

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params
      .subscribe((params) => {
        this.userService.getUser(params.id).subscribe(user => {
          this.user = user;
        }, error => {
          this.router.navigateByUrl('/invalid-url');
        });
      });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.updateUser(this.user)
      .subscribe(valor => {
        this.router.navigateByUrl('/user/' + this.user.id);
        alert('Usuário atualizado com sucesso');
      }, error => {
        alert('Erro ao atualizar, entre em contato com o suporte.');
      });
  }

}
