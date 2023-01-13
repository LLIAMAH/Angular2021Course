import { Injectable } from '@angular/core';
import {IUser, User} from "../general-types/User";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: IUser[] = [];

  constructor() {
    if (this.users.length === 0) {
      this.users.push(...[
        new User(1, 'User1', 'Vasiliy', 'Himchenko', new Date('1982-10-25')),
        new User(2, 'User2', 'Valeriy', 'Kovalenko', new Date('1983-02-28')),
        new User(3, 'User3', 'Vitaliy', 'Ozornin', new Date('1978-06-24')),
        new User(4, 'User4', 'Alexandr', 'Timoshenko', new Date('1980-07-08')),
        new User(5, 'User5', 'Oleg', 'Divov', new Date('1965-12-25')),
        new User(6, 'User6', 'Michail', 'Lantsov', new Date('1990-01-02')),
        new User(7, 'User7', 'Dem', 'Mihailov', new Date('1980-04-13'))
      ])
    }
  }

  getUserById(id: number) : IUser {
    let user = this.users.find(o => o.id === id);
    if(user)
      return user;

    throw 'getUserById: Cannot get user';
  }

  addUser(login: string, firstName: string, lastName: string, birthDate: Date): boolean {
    const found = this.users.find(o => o.login === login || (o.firstName === firstName && o.lastName === lastName));
    if (!found) {
      const arr = this.users.map(o => {
        return o.id
      });
      const maxId = Math.max(...arr) + 1;
      this.users.push(new User(maxId, login, firstName, lastName, birthDate));
      return true;
    }

    return false;
  }
}
