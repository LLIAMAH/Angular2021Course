import {Component} from '@angular/core';
import {IAccount} from "../../general-types/objects";
import {AccountsService} from "../../services/accounts.service";

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css']
})
export class ServerEditComponent {
  constructor(private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (accountChanged: IAccount) => {
        alert(`New status of the item (${accountChanged.name}): ${accountChanged.status}`);
      });
  }

  onAddAccount(inputAccountName: HTMLInputElement, inputAccountStatus: HTMLSelectElement) {
    const name = inputAccountName.value;
    const status = inputAccountStatus.value;
    this.accountsService.AddAccount(name, status);
  }
}
