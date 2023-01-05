import {Component, EventEmitter, Output} from '@angular/core';
import {IServer, Server} from "../general-types/objects";

@Component({
  selector: 'app-server-manager',
  templateUrl: './server-manager.component.html',
  styleUrls: ['./server-manager.component.css']
})
export class ServerManagerComponent {
  @Output()
  serverCreated: EventEmitter<IServer> = new EventEmitter<IServer>();
  @Output()
  blueprintCreated: EventEmitter<IServer> = new EventEmitter<IServer>();

  onAdd(): void {
    Math.random() > 0.5
      ? this.serverCreated.emit(new Server('Server', 'Server is working', 'server'))
      : this.serverCreated.emit(new Server('Server', 'Server is working', 'blueprint'));
  }
}
