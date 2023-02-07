import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpParams
} from '@angular/common/http';
import {exhaustMap, Observable, take} from 'rxjs';
import {AuthService, IUserNullable} from "../services/auth.service";
import {IUser, User} from "../general-types/User";
import {map} from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authService.user.pipe(
      map((un: IUserNullable) => new User(un!.id, un!.login, un!.firstName, un!.lastName, un!.birthDate, un!.token)),
      take(1),
      exhaustMap((user: IUser) => {
        const modifiedRequest = request.clone({
          params: new HttpParams().set('auth', user.token)
        })
        return next.handle(modifiedRequest);
      })
    )
  }
}
