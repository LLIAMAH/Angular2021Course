import {Component, OnInit} from '@angular/core';
import {UsersService} from "../services/users.service";
import {IUser} from "../general-types/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  selectedIndex: number = 0;

  constructor(private usersService: UsersService, private router: Router) {  }

  ngOnInit(): void {
    this.users = this.usersService.users;
  }

  onUserSelect(event: Event, index: number, id: number) {
    event.preventDefault();
    this.selectedIndex = index;
    this.router.navigate(['users', id]);
  }
}
