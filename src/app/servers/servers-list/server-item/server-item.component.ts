import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IAccount} from "../../../general-types/objects";

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css']
})
export class ServerItemComponent {
  @Input()
  account!: IAccount;

  @Output()
  onSetToClicked: EventEmitter<IAccount> = new EventEmitter<IAccount>();

  onSetTo(status: string) {
    this.account.status = status
    this.onSetToClicked.emit(this.account);
  }
}
