import { Component } from '@angular/core';
import {IAccount} from "../general-types/objects";
import {AccountsService} from "../services/accounts.service";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [AccountsService]
})
export class ServersComponent {
  constructor(private accountsService: AccountsService) {  }

  onAddAccount(accountAdded: IAccount) {
    this.accountsService.AddAccount(accountAdded)
  }

  onAccountItemStatusChange(accountItem: IAccount) {
    this.accountsService.SetNewStatus(accountItem);
  }
}
