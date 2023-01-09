import { Component } from '@angular/core';
import {Recipe} from "../general-types/objects";
import {LoggingService} from "../services/logging.service";
import {RecipeService} from "../services/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipe!: Recipe;

  constructor(private recipeService: RecipeService, private log: LoggingService) {
    this.recipeService.onRecipeItemSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
        this.log.WriteLog('Subscriptions raised.')
      });

    this.log.WriteLog('Detail subscription initiated.')
  }
}
