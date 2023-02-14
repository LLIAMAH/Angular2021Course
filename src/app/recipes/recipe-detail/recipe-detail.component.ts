import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../general-types/Recipe";
import {ShoppingListService} from "../../services/shopping-list.service";
import {ActivatedRoute, Data, Router} from "@angular/router";
import {RecipeService} from "../../services/recipe.service";
import {Store} from "@ngrx/store";
import {IngredientsState} from "../../shopping-list/store/shopping-list.reducer";
import * as ShoppingListActions from "../../shopping-list/store/shopping-list.actions"

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;

  constructor(private shoppingList: ShoppingListService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService,
              private store: Store<{ shoppingList: IngredientsState }>) { }

  onMoveToShoppingList(event: Event): void {
    event.preventDefault();
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
    //this.shoppingList.MoveRecipeToShoppingList(this.recipe.ingredients);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (param: Data) => {
        this.recipe = this.recipeService.getRecipe(Number(param['id']));
      }
    )
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe.id);
    this.router.navigate(['/recipes']);
  }
}
