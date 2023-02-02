import {Component, Output} from '@angular/core';
import {DataParentItem, IDataParentItem} from "../types/DataParentnessItem";
import {Subject} from "rxjs";

@Component({
  selector: 'app-data-child1',
  templateUrl: './data-child1.component.html',
  styleUrls: ['./data-child1.component.css']
})
export class DataChild1Component {
  @Output()
  dataItem: Subject<IDataParentItem> = new Subject<IDataParentItem>()

  onChild1Click(name: HTMLInputElement, amount: HTMLInputElement) {
    const nameValue = name.value;
    const amountValue = Number(amount.value);
    this.dataItem.next(new DataParentItem(nameValue, amountValue));
  }
}
