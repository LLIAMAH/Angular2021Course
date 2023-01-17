import {Component, Input} from '@angular/core';
import {Recipe} from "../../../general-types/Recipe";
import {RecipeService} from "../../../services/recipe.service";
import {LoggingService} from "../../../services/logging.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input()
  recipeItem!: Recipe;

  constructor(private recipeService: RecipeService, private log: LoggingService) { }

  onSelected(e: Event): void {
    e.preventDefault();
    this.recipeService.onRecipeSelected.next(this.recipeItem);
    this.log.WriteLog('onSelected finished');
  }
}
