import {Component } from '@angular/core';
import {IDataParentItem} from "./types/DataParentnessItem";

@Component({
  selector: 'app-data-communication',
  templateUrl: './data-communication.component.html',
  styleUrls: ['./data-communication.component.css']
})
export class DataCommunicationComponent {

  dataItems: IDataParentItem[] = [];

  onProcessDataItem(dataItem: IDataParentItem) {
    this.dataItems.push(dataItem);
  }
}
