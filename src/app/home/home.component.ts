import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isLoggedOn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {  }

  onClick(itemToMoveOn: string) {
    this.router.navigate([`/${itemToMoveOn}`]);
  }

  onLogin() {
    this.authService.login();
    this.isLoggedOn = this.authService.loggedIn;
  }

  onLogOut() {
    this.authService.logout();
    this.isLoggedOn = this.authService.loggedIn;
  }
}
