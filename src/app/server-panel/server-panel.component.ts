import {Component, Input} from '@angular/core';
import {Server} from "../general-types/objects";

@Component({
  selector: 'app-server-panel',
  templateUrl: './server-panel.component.html',
  styleUrls: ['./server-panel.component.css']
})
export class ServerPanelComponent {

  @Input()
  element: Server | null = null;

  @Input()
  counter: number = 0;

}
