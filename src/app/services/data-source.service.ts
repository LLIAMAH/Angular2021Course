import {EventEmitter, Injectable} from '@angular/core';
import {IIngredient, Ingredient, Recipe} from "../general-types/objects";
import {LoggingService} from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  ingredients: IIngredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1600,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg'),
    new Recipe('A Test Recipe 3', 'This is simply a test 3', 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/british_shakshuka_26737_16x9.jpg')
  ];

  onRecipeItemSelected = new EventEmitter<Recipe>();
  onIngredientAdd = new EventEmitter<IIngredient>();
  onIngredientsClear = new EventEmitter<void>();

  constructor(private log: LoggingService) { }

  onRecipeSelect(recipe: Recipe): void{
    this.onRecipeItemSelected.emit(recipe);
    this.log.WriteLog(`Recipe selected: ${recipe}`);
  }
}
