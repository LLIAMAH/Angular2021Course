import * as ShoppingListActions from "./shopping-list.actions";
import {Ingredient} from "../../general-types/Ingredient";

export interface IngredientsState {
  ingredients: Ingredient[];
}

const initialState: IngredientsState = {
  ingredients: []
}

export function shoppingListReducer(state: IngredientsState = initialState, action: ShoppingListActions.AddIngredient): IngredientsState {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    default:
      return state;
  }
}
