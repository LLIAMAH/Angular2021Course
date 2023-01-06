import { Component } from '@angular/core';
import {IIngredient, Ingredient} from "../general-types/objects";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: IIngredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  onIngredientAdd(ingredient: IIngredient) {
    let found = this.ingredients.find(o => o.name === ingredient.name);
    if (found)
      found.amount += ingredient.amount;
    else
      this.ingredients.push(ingredient);
  }
}
