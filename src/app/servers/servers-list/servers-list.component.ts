import {Component, Input} from '@angular/core';
import {IAccount} from "../../general-types/objects";

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.css']
})
export class ServersListComponent {
  @Input()
  accountItems!: IAccount[];
}
