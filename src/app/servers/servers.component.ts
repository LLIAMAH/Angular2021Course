import { Component } from '@angular/core';
import {IAccount} from "../general-types/objects";
import {AccountsService} from "../services/accounts.service";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  constructor(public accountsService: AccountsService) {  }

  onAddAccount(accountAdded: IAccount) {
    if(!this.accountsService.AddAccount(accountAdded)){
      alert(`Account with this name '${accountAdded.name}' already exists.`);
    }
  }

  onAccountItemStatusChange(accountItem: IAccount) {
    this.accountsService.SetNewStatus(accountItem);
  }
}
