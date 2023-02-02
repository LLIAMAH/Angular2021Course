import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IUser} from "../general-types/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;
  user!: BehaviorSubject<IUser>;

  constructor() {
  }

  login(): void {
    this.loggedIn = true;
  }

  logout(): void {
    this.loggedIn = false;
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise<boolean>(
      (resolve, reject) => {
        setTimeout(() => {
            resolve(this.loggedIn);
          },
          800)
      }
    );
  }
}
