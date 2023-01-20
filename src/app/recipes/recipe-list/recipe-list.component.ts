import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../../general-types/Recipe";
import {RecipeService} from "../../services/recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ISubscriptionsStorage, SubscriptionsStorage} from "../../general-types/SubscriptionStorage";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy  {

  recipes: Recipe[] = [];
  private subscriptionStorage: ISubscriptionsStorage = new SubscriptionsStorage()

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.subscriptionStorage.addSubscription(
      this.recipeService.onRecipesChanged.subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      )
    )
  }

  onRecipeNew():void {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscriptionStorage.clear();
  }
}
