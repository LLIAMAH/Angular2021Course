import { Component } from '@angular/core';
import {Recipe} from "../general-types/objects";
import {DataSourceService} from "../services/data-source.service";
import {LoggingService} from "../services/logging.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipe!: Recipe;

  constructor(private dataSource: DataSourceService, private log: LoggingService) {
    this.dataSource.onRecipeItemSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
        this.log.WriteLog('Subscriptions raised.')
      });

    this.log.WriteLog('Detail subscription initiated.')
  }
}
