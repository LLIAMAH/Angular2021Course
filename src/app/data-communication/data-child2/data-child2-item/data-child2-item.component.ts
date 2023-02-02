import {Component, Input} from '@angular/core';
import {IDataParentItem} from "../../types/DataParentnessItem";

@Component({
  selector: 'app-data-child2-item',
  templateUrl: './data-child2-item.component.html',
  styleUrls: ['./data-child2-item.component.css']
})
export class DataChild2ItemComponent {

  @Input()
  itemValue!: IDataParentItem;
  isActiveClass: string = '';
  onSelect() { }
}
