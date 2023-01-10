import {IIngredient} from "./Ingredient";

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: IIngredient[];

  constructor(name: string, description: string, imagePath: string, ingredients: IIngredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
