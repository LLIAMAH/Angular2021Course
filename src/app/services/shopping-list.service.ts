import {EventEmitter, Injectable} from '@angular/core';
import {IIngredient, Ingredient} from "../general-types/objects";

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

  constructor() { }

  getIngredients(): IIngredient[] {
    return this.ingredients;
  }

  AddIngredient(name: string, amount: number): void {
    let found = this.ingredients.find(o => o.name === name);

    if (found) {
      found.amount += amount;
      this.onIngredientAmountChanged.emit(this.ingredients);
    } else {
      const ingredient = new Ingredient(name, amount)
      this.ingredients.push(ingredient);
      this.onAddIngredient.emit(this.ingredients)
    }
  }

  ClearIngredients(): void {
    this.ingredients = [];
    this.onIngredientsCleared.emit();
  }
}
