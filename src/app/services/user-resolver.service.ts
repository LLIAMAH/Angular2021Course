import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

import {IUser} from "../general-types/User";
import {UsersService} from "./users.service";


@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<IUser> {

  constructor(private userService: UsersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    return this.userService.getUserById(Number(route.params['id']));
  }
}
