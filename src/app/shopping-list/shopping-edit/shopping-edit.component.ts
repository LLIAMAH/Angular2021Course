import {Component, EventEmitter, Output} from '@angular/core';
import {IIngredient} from "../../general-types/objects";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output()
  onAddIngredient = new EventEmitter<IIngredient>();

  onAddItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.onAddIngredient.emit({name: nameInput.value, amount: Number(amountInput.value)});
  }
}
