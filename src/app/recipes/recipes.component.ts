import { Component } from '@angular/core';
import {Recipe} from "../general-types/objects";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipe!: Recipe;

  setRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
