import {EventEmitter, Injectable} from '@angular/core';
import {IIngredient, Ingredient} from "../general-types/Ingredient";
import {LoggingService} from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: IIngredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  onAddIngredient: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
  onIngredientAmountChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
  onIngredientsCleared: EventEmitter<void> = new EventEmitter<void>();
  onUpdateIngredients: EventEmitter<IIngredient[]> = new EventEmitter<IIngredient[]>();
  //onUpdateIngredients: EventEmitter<void> = new EventEmitter<void>();

  constructor(private log: LoggingService) { }

  getIngredients(): IIngredient[] {
    return this.ingredients;
  }

  AddIngredient(name: string, amount: number): void {
    let found = this.ingredients.find(o => o.name === name);

    if (found) {
      found.amount += amount;
      this.onIngredientAmountChanged.emit(this.ingredients);
    } else {
      const ingredient = new Ingredient(name, amount);
      this.ingredients.push(ingredient);
      this.onAddIngredient.emit(this.ingredients);
    }
  }

  ClearIngredients(): void {
    this.ingredients = [];
    this.onIngredientsCleared.emit();
  }

  MoveRecipeToShoppingList(ingredients: Ingredient[]) {
    this.log.WriteLog('MoveRecipeToShoppingList initiated');
    this.ingredients = ingredients;
    this.log.WriteLog('onUpdateIngredients before emit.');
    this.onUpdateIngredients.emit(this.ingredients);
    //this.onUpdateIngredients.emit();
    this.log.WriteLog('onUpdateIngredients after emit.');
    this.log.WriteLog('MoveRecipeToShoppingList finished');
  }
}
