import {Component} from '@angular/core';
import {ServerStatus} from "../general-types/Enums";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: ServerStatus = ServerStatus.Offline;

  constructor() {
    this.serverStatus = Math.random() > 0.5
      ? ServerStatus.Online
      : ServerStatus.Offline;
  }

  getServerStatus():ServerStatus {
    return this.serverStatus;
  }

  getColorByServerStatus() {
    switch (this.serverStatus) {
      case ServerStatus.Online:
        return 'green';
      default:
        return 'red';
    }
  }
}
