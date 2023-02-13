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

  startedEditIngredient = new Subject<IIngredient>();

  onIngredientAdded: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  onIngredientChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  onIngredientsCleared: Subject<void> = new Subject<void>();
  onUpdateIngredients: Subject<IIngredient[]> = new Subject<IIngredient[]>();
  onUpdateList: Subject<void> = new Subject<void>();

  constructor(private log: LoggingService) { }

  getIngredients(): IIngredient[] {
    return this.ingredients;
  }

  addIngredient(name: string, amount: number): void {
    if (name === undefined || amount === 0) {
      this.log.WriteLog('name or amount parameters is null -> AddIngredient aborting.');
      return;
    }

    let found = this.ingredients.find(o => o.name === name);

    if (found) {
      found.amount += amount;
      this.onIngredientChanged.next(this.ingredients);
    } else {
      const ingredient = new Ingredient(name, amount);
      this.ingredients.push(ingredient);
      this.onIngredientAdded.next(this.ingredients);
    }
  }

  editIngredient(item: Ingredient): void {
    let found = this.ingredients.find(o=>o.name === item.name);
    if (found) {
      found.name = item.name;
      found.amount = item.amount;
      this.onIngredientChanged.next(this.ingredients);
    }
  }

  deleteIngredient(name: string): boolean {
    if(name === '')
      return false;
    const found = this.ingredients.find(o=>o.name === name);
    if(!found)
      return false;
    const index = this.ingredients.indexOf(found);
    this.ingredients.slice(index, 1)
    this.onUpdateIngredients.next(this.ingredients);
    return true;
  }

  clearIngredients(): void {
    this.ingredients = [];
    this.onIngredientsCleared.next();
  }

  MoveRecipeToShoppingList(ingredients: Ingredient[]) {
    this.ingredients = ingredients;
    this.onUpdateIngredients.next(this.ingredients);
  }


}
