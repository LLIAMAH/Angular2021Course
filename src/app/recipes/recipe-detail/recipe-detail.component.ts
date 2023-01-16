import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../general-types/Recipe";
import {ShoppingListService} from "../../services/shopping-list.service";
import {ActivatedRoute, Data} from "@angular/router";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;

  constructor(private shoppingList: ShoppingListService, private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  onMoveToShoppingList(event: Event): void {
    event.preventDefault();
    this.shoppingList.MoveRecipeToShoppingList(this.recipe.ingredients);
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Data) => {
        this.recipe = this.recipeService.getRecipe(Number(param['id']));
      }
    )
  }
}
