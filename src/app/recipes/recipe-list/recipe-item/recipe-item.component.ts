import {Component, Input} from '@angular/core';
import {Recipe} from "../../../general-types/objects";
import {DataSourceService} from "../../../services/data-source.service";
import {LoggingService} from "../../../services/logging.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input()
  recipeItem!: Recipe;

  constructor(private dataSource: DataSourceService, private log: LoggingService) { }

  onSelected(): void {
    this.dataSource.onRecipeSelect(this.recipeItem);
    this.log.WriteLog(`onSelected finished: ${this.recipeItem.name}`)
  }
}
