import {Component, Input} from '@angular/core';
import {IAccount} from "../../../general-types/objects";
import {AccountsService} from "../../../services/accounts.service";

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css']
})
export class ServerItemComponent {
  @Input()
  account!: IAccount;
  @Input()
  id: number = 0;

  constructor(private accountsService: AccountsService) {  }

  onSetTo(status: string) {
    this.account.status = status;
    this.accountsService.UpdateStatus(this.account)
    this.accountsService.statusUpdated.emit(this.account);
  }
}
