import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "../general-types/objects";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1600,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg'),
    new Recipe('A Test Recipe 3', 'This is simply a test 3', 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/british_shakshuka_26737_16x9.jpg')
  ];

  onRecipeSelected = new EventEmitter<Recipe>();
  selectedRecipe!: Recipe;

  constructor() { }

  getRecipes() : Recipe[] {
    return this.recipes.slice();
  }
}
