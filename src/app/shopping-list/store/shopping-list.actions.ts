import {Action} from "@ngrx/store";
import {Ingredient} from "../../general-types/Ingredient";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
  readonly type: string = ADD_INGREDIENT;
  payload!: Ingredient;
}
