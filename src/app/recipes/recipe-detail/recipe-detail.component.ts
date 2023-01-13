import {Component, Input} from '@angular/core';
import {Recipe} from "../../general-types/Recipe";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input()
  recipe!: Recipe;

  constructor(private shoppingList: ShoppingListService) { }

  onMoveToShoppingList(event: Event): void {
    event.preventDefault();
    this.shoppingList.MoveRecipeToShoppingList(this.recipe.ingredients);
  }
}
