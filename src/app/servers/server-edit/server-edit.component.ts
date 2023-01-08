import {Component, EventEmitter, Output} from '@angular/core';
import {Account, IAccount} from "../../general-types/objects";

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css']
})
export class ServerEditComponent {

  @Output()
  onAddAccountEmitter: EventEmitter<IAccount> = new EventEmitter<IAccount>()

  onAddAccount(inputAccountName: HTMLInputElement, inputAccountStatus: HTMLSelectElement) {
    const name = inputAccountName.value;
    const status = inputAccountStatus.value;
    this.onAddAccountEmitter.emit(new Account(name, status));
  }
}
