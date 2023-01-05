import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../../general-types/objects";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output()
  onRecipeItemSelectedParent = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg')
  ];

  onRecipeItemSelected(recipe: Recipe) {
    this.onRecipeItemSelectedParent.emit(recipe)
  }
}
