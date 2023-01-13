import {IIngredient} from "./Ingredient";

export class Recipe {
  public id: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: IIngredient[];

  constructor(id: number, name: string, description: string, imagePath: string, ingredients: IIngredient[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }

  equals(recipe: Recipe): boolean {
    return this.name === recipe.name;
  }
}
