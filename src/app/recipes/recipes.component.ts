import {Component, OnInit} from '@angular/core';
import {Recipe} from "../general-types/Recipe";
import {RecipeService} from "../services/recipe.service";
import {ShoppingListService} from "../services/shopping-list.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe!: Recipe;

  constructor(private recipeService: RecipeService,
              private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.recipeService.onRecipeSelected.subscribe(
      (recipe: Recipe) => {
        if(this.selectedRecipe == undefined || !this.selectedRecipe.equals(recipe))
        {
          this.selectedRecipe = recipe;
          this.shoppingListService.onIngredientsCleared.emit()
        }
      });
  }
}
