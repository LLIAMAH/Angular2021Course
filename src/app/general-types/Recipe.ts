import {IIngredient} from "./Ingredient";

export class Recipe {
  public id: number;
  public title: string;
  public description: string;
  public imagePath: string;
  public ingredients: IIngredient[];

  constructor(id: number, title: string, description: string, imagePath: string, ingredients: IIngredient[]) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }

  equals(recipe: Recipe): boolean {
    return this.title === recipe.title;
  }
}
