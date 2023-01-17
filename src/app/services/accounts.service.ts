import {Injectable} from '@angular/core';
import {Account, IAccount} from "../general-types/Account";
import {LoggingService} from "./logging.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  accounts: IAccount[] = [
    new Account('Master account', 'unknown'),
    new Account('Test account', 'unknown'),
    new Account('Hidden account', 'unknown')
  ];

  statusUpdated: Subject<IAccount> = new Subject<IAccount>();

  constructor(private log: LoggingService) { }

  findAccount(name: string): IAccount {
    return this.accounts.find(o => o.name === name)!;
  }

  AddAccount(name: string, status: string): boolean {
    const found = this.findAccount(name);
    if (!found) {
      this.accounts.push(new Account(name, status));
      this.log.WriteLog(`Account added: (name: ${name}; status: ${status})`);
      return true;
    }

    this.log.WriteLog(`Account added failed - already exists: (name: ${found.name}; status: ${found.status})`);
    alert(`Account with this name '${found.name}' already exists.`);
    return false;
  }

  UpdateStatus(account: IAccount) {
    let found = this.findAccount(account.name);
    if (found) {
      found = account;
      this.log.WriteLog(`Account (${found.name}) received new status: ${found.status}.`);
    }
  }
}
