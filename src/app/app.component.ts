import {Component} from '@angular/core';
import {IServer, Server} from "./general-types/objects";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: IServer[] = [ new Server('Server (default)', 'Just a server default value.', 'server' )];
  counter: number = 0;

  constructor() {
  }

  onServerAdded(serverData: IServer): void {
    this.counter++;
    this.servers.push(new Server(serverData.title + this.counter, serverData.description, serverData.type))
  }

  onBlueprintAdded(serverData: IServer): void {
    this.counter++;
    this.servers.push(new Server(serverData.title + this.counter, serverData.description, serverData.type))
  }

}
