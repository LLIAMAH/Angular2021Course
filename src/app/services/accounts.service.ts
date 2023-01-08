import { Injectable } from '@angular/core';
import {Account, IAccount} from "../general-types/objects";
import {LoggingService} from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  accounts: IAccount[] = [
    new Account('Master account', 'unknown'),
    new Account('Test account', 'unknown'),
    new Account('Hidden account', 'unknown')
  ];

  constructor(private log: LoggingService) { }

  getAccounts(): IAccount[] {
    return this.accounts;
  }

  findAccount(name: string): IAccount {
    return this.accounts.find(o => o.name === name)!;
  }

  AddAccount(accountAdded: IAccount): boolean {
    const found = this.findAccount(accountAdded.name);
    if (!found) {
      this.accounts.push(accountAdded);
      this.log.WriteLog(`Account added: (name: ${accountAdded.name}; status: ${accountAdded.status})`);
      return true;
    }

    this.log.WriteLog(`Account added failed - already exists: (name: ${found.name}; status: ${found.status})`);
    alert(`Account with this name '${found.name}' already exists.`);
    return false;
  }

  SetNewStatus(accountItem: IAccount) {
    let found = this.findAccount(accountItem.name);
    if (found) {
      found = accountItem;
      this.log.WriteLog(`Account (${found.name}) received new status: ${found.status}.`);
    }
  }
}
