import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {ActivatedRoute, Params} from "@angular/router";
import {IUser} from "../../general-types/User";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user!: IUser;

  constructor(private usersService: UsersService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.user = this.usersService.getUserById(id);
    this.route.params.subscribe(
      (params: Params) => {
        const id = Number(params['id']);
        this.user = this.usersService.getUserById(id);
      }
    );
  }
}
