import {Component} from '@angular/core';
import {Recipe} from "../../general-types/objects";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
    this.recipes = this.recipeService.recipes;
  }
}
