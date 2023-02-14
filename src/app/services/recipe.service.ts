import {Injectable} from '@angular/core';
import {Recipe} from "../general-types/Recipe";
import {Ingredient} from "../general-types/Ingredient";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(1,
      'A Test Recipe 1',
      'This is simply a test 1',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Green', 3),
        new Ingredient('Bread', 1),
        new Ingredient('Onion', 3)
      ]),
    new Recipe(2,
      'A Test Recipe 2',
      'This is simply a test 2',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1600,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg',
      [
        new Ingredient('Fish', 1),
        new Ingredient('Green', 3),
        new Ingredient('Potato', 3)
      ]),
    new Recipe(3,
      'A Test Recipe 3',
      'This is simply a test 3',
      'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/british_shakshuka_26737_16x9.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Green', 3),
        new Ingredient('Potato', 3)
      ])
  ];

  onRecipeSelected = new Subject<Recipe>();
  onRecipesChanged = new Subject<Recipe[]>();

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.onRecipesChanged.next(this.recipes);
  }

  getRecipe(id: number): Recipe {
    return this.getRecipes().find(
      (r) => {
        return r.id === id;
      })!
  }

  getRecipeIndex(id: number): number {
    return this.recipes.map((x) => {
      return x.id;
    }).indexOf(id);
  }

  addRecipe(recipe: Recipe): boolean {
    recipe.id = Math.max(...this.recipes.map(o => {
      return o.id
    })) + 1;
    this.recipes.push(recipe);
    this.onRecipesChanged.next(this.recipes);
    return true;
  }

  updateRecipe(id: number, recipe: Recipe): boolean {
    let found = this.getRecipeIndex(id);
    if (found > -1) {
      this.recipes[found] = recipe;
      this.onRecipesChanged.next(this.recipes);
      return true;
    }
    return false;
  }

  deleteRecipe(id: number): void {
    this.recipes.splice(this.getRecipeIndex(id), 1);
    this.onRecipesChanged.next(this.recipes);
  }
}
