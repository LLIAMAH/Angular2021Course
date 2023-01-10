import {Component, OnInit} from '@angular/core';
import {Recipe} from "../general-types/Recipe";
import {LoggingService} from "../services/logging.service";
import {RecipeService} from "../services/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe!: Recipe;

  constructor(private recipeService: RecipeService, private log: LoggingService) { }

  ngOnInit(): void {
    this.recipeService.onRecipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
        this.log.WriteLog('Subscriptions raised.')
      });
  }
}
