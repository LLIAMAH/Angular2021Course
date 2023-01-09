import {Component} from '@angular/core';
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListService) { }

  onAddItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement): void {
    this.shoppingListService.AddIngredient(nameInput.value, Number(amountInput.value));
  }

  onClearItems(): void {
    this.shoppingListService.ClearIngredients();
  }
}
