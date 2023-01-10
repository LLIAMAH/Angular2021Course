import {Component, Input} from '@angular/core';
import {Recipe} from "../../../general-types/Recipe";
import {RecipeService} from "../../../services/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input()
  recipeItem!: Recipe;

  constructor(private recipeService: RecipeService) { }

  onSelected(): void {
    this.recipeService.onRecipeSelected.emit(this.recipeItem);
  }
}
