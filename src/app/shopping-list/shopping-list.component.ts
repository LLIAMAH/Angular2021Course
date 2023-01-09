import { Component } from '@angular/core';
import {IIngredient} from "../general-types/objects";
import {RecipeService} from "../services/recipe.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: IIngredient[];

  constructor(recipeService: RecipeService) {
    this.ingredients = recipeService.ingredients;
  }

  onIngredientAdd(ingredient: IIngredient) {
    let found = this.ingredients.find(o => o.name === ingredient.name);
    if (found)
      found.amount += ingredient.amount;
    else
      this.ingredients.push(ingredient);
  }

  onIngredientsClear() {
    this.ingredients = [];
  }
}
