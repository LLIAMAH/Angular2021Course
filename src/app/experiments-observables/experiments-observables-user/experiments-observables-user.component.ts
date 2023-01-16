import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {IUser} from "../../general-types/User";

@Component({
  selector: 'app-experiments-observables-user',
  templateUrl: './experiments-observables-user.component.html',
  styleUrls: ['./experiments-observables-user.component.css']
})
export class ExperimentsObservablesUserComponent implements OnInit {
  user!: IUser;

  constructor(private route: ActivatedRoute, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params) => {
        this.user = this.usersService.getUserById(Number(param['id']));
      }
    )
  }
}
