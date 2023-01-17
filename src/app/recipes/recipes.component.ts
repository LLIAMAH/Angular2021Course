import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../general-types/Recipe";
import {RecipeService} from "../services/recipe.service";
import {ShoppingListService} from "../services/shopping-list.service";
import {ISubscriptionsStorage, SubscriptionsStorage} from "../general-types/SubscriptionStorage";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {
  selectedRecipe!: Recipe;
  private subscriptionStorage: ISubscriptionsStorage = new SubscriptionsStorage()

  constructor(private recipeService: RecipeService,
              private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.subscriptionStorage.addSubscription(
      this.recipeService.onRecipeSelected.subscribe(
        (recipe: Recipe) => {
          if (this.selectedRecipe == undefined || !this.selectedRecipe.equals(recipe)) {
            this.selectedRecipe = recipe;
            this.shoppingListService.onIngredientsCleared.next()
          }
        }));
  }

  ngOnDestroy(): void {
    this.subscriptionStorage.clear();
  }
}
