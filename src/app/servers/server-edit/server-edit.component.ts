import {Component, OnDestroy, OnInit} from '@angular/core';
import {IAccount} from "../../general-types/Account";
import {AccountsService} from "../../services/accounts.service";
import {ISubscriptionsStorage, SubscriptionsStorage} from "../../general-types/SubscriptionStorage";

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css']
})
export class ServerEditComponent implements OnInit, OnDestroy {

  private subscribeStorage: ISubscriptionsStorage = new SubscriptionsStorage();

  constructor(private accountsService: AccountsService) {  }

  onAddAccount(inputAccountName: HTMLInputElement, inputAccountStatus: HTMLSelectElement) {
    const name = inputAccountName.value;
    const status = inputAccountStatus.value;
    this.accountsService.AddAccount(name, status);
  }

  ngOnInit(): void {
    this.subscribeStorage.addSubscription(this.accountsService.statusUpdated.subscribe(
      (accountChanged: IAccount) => {
        alert(`New status of the item (${accountChanged.name}): ${accountChanged.status}`);
      }));
  }

  ngOnDestroy(): void {
    this.subscribeStorage.clear();
  }
}
