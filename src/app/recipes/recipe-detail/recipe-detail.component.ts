import {Component, Input} from '@angular/core';
import {Recipe} from "../../general-types/objects";
import {DataSourceService} from "../../services/data-source.service";
import {LoggingService} from "../../services/logging.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input()
  recipe!: Recipe;

  constructor(private dateSource: DataSourceService, private log: LoggingService) {
    this.dateSource.onRecipeItemSelected.subscribe(
      (recipe: Recipe) => {
        this.recipe = recipe;
        this.log.WriteLog('Subscriptions raised.')
      });

    this.log.WriteLog('Detail subscription initiated.')
  }
}
