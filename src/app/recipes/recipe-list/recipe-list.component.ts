import {Component} from '@angular/core';
import {Recipe} from "../../general-types/objects";
import {DataSourceService} from "../../services/data-source.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[];

  constructor(private dataSource: DataSourceService) {
    this.recipes = dataSource.recipes;
  }
}
