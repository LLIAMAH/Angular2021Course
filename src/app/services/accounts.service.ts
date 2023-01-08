import { Injectable } from '@angular/core';
import {Account, IAccount} from "../general-types/objects";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  accounts: IAccount[] = [
    new Account('Master account', 'unknown'),
    new Account('Test account', 'unknown'),
    new Account('Hidden account', 'unknown')
  ];

  constructor() { }

  getAccounts(): IAccount[] {
    return this.accounts;
  }

  AddAccount(accountAdded: IAccount): boolean {
    const found = this.accounts.find(o => o.name === accountAdded.name);
    if (!found) {
      this.accounts.push(accountAdded);
      return true;
    }

    alert(`Account with this name '${accountAdded.name}' already exists.`);
    return false;
  }

  SetNewStatus(accountItem: IAccount) {
    let found = this.accounts.find(o => o.name === accountItem.name);
    if (found) {
      found = accountItem;
    }
  }
}
