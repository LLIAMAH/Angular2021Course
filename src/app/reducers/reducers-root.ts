import {IngredientsState, shoppingListReducer} from "../shopping-list/store/shopping-list.reducer";
import {ActionReducerMap} from "@ngrx/store";

export const rootReducer = {};

export interface AppState {
  shoppingList: IngredientsState;
}


export const reducers: ActionReducerMap<AppState, any> = {
  shoppingList: shoppingListReducer
}
