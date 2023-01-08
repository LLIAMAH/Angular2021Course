import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IAccount} from "../../general-types/objects";

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.css']
})
export class ServersListComponent {
  @Input()
  accountItems!: IAccount[];

  @Output()
  onAccountItemStatusChanged: EventEmitter<IAccount> = new EventEmitter<IAccount>();

  onItemSetTo(item: IAccount) {
    this.onAccountItemStatusChanged.emit(item);
  }
}
