import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IUser} from "../general-types/User";

export type IUserNullable = IUser | null;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;
  user: BehaviorSubject<IUserNullable> = new BehaviorSubject<IUserNullable>(null);

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
        resolve(this.loggedIn);
      }
    );
  }
}
