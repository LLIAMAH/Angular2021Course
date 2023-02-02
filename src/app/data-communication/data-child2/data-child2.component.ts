import {Component, Input} from '@angular/core';
import {IDataParentItem} from "../types/DataParentnessItem";

@Component({
  selector: 'app-data-child2',
  templateUrl: './data-child2.component.html',
  styleUrls: ['./data-child2.component.css']
})
export class DataChild2Component {
  @Input()
  dataItems: IDataParentItem[] = [];
}
