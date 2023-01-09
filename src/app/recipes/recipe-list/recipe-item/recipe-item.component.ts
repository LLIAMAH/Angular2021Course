import {Component, Input} from '@angular/core';
import {Recipe} from "../../../general-types/objects";
import {LoggingService} from "../../../services/logging.service";
import {RecipeService} from "../../../services/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input()
  recipeItem!: Recipe;

  constructor(private recipeService: RecipeService, private log: LoggingService) { }

  onSelected(): void {
    this.recipeService.onRecipeSelect(this.recipeItem);
    this.log.WriteLog(`onSelected finished: ${this.recipeItem.name}`)
  }
}
