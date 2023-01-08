import {Component, OnInit} from '@angular/core';
import {IAccount} from "../general-types/objects";
import {AccountsService} from "../services/accounts.service";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [AccountsService]
})
export class ServersComponent implements OnInit {

  accounts: IAccount[] = [];

  constructor(private accountsService: AccountsService) {  }

  onAddAccount(accountAdded: IAccount) {
    this.accountsService.AddAccount(accountAdded)
  }

  onAccountItemStatusChange(accountItem: IAccount) {
    this.accountsService.UpdateStatus(accountItem);
  }

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
