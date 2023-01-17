import {Injectable} from '@angular/core';
import {IIngredient, Ingredient} from "../general-types/Ingredient";
import {LoggingService} from "./logging.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: IIngredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  onAddIngredient: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  onIngredientAmountChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  onIngredientsCleared: Subject<void> = new Subject<void>();
  onUpdateIngredients: Subject<IIngredient[]> = new Subject<IIngredient[]>();

  //onUpdateIngredients: Subject<void> = new Subject<void>();

  constructor(private log: LoggingService) {
  }

  getIngredients(): IIngredient[] {
    return this.ingredients;
  }

  AddIngredient(name: string, amount: number): void {
    if (name === undefined || amount === 0) {
      this.log.WriteLog('name or amount parameters is null -> AddIngredient aborting.');
      return;
    }

    let found = this.ingredients.find(o => o.name === name);

    if (found) {
      found.amount += amount;
      this.onIngredientAmountChanged.next(this.ingredients);
    } else {
      const ingredient = new Ingredient(name, amount);
      this.ingredients.push(ingredient);
      this.onAddIngredient.next(this.ingredients);
    }
  }

  ClearIngredients(): void {
    this.ingredients = [];
    this.onIngredientsCleared.next();
  }

  MoveRecipeToShoppingList(ingredients: Ingredient[]) {
    this.ingredients = ingredients;
    this.onUpdateIngredients.next(this.ingredients);
  }
}
