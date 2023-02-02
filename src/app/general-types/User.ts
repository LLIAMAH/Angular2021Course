export interface IUser {
  id: number;
  login: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  token: string;
}

export class User implements IUser {
  constructor(public id: number, public login: string, public firstName: string, public lastName: string,
              public birthDate: Date, public token: string) {  }

}
