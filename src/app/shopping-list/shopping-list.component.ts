import {Component, OnDestroy, OnInit} from '@angular/core';
import {IIngredient} from "../general-types/Ingredient";
import {ShoppingListService} from "../services/shopping-list.service";
import {Store} from "@ngrx/store";
import {IngredientsState} from "./store/shopping-list.reducer";
import {Observable} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  stateObservable!: Observable<IngredientsState>;
  //private subscriptions: ISubscriptionsStorage = new SubscriptionsStorage();

  constructor(private shoppingListService: ShoppingListService,
              private store: Store<{ shoppingList: IngredientsState }>) {
  }

  ngOnInit(): void {
    this.stateObservable =  this.store.select('shoppingList');
    //this.ingredients = this.shoppingListService.getIngredients();

    /*this.subscriptions.addSubscri0ption(
      this.shoppingListService.onIngredientAdded.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }));

    this.subscriptions.addSubscription(
      this.shoppingListService.onIngredientsCleared.subscribe(
        () => {
          this.ingredients = [];
        }));

    this.subscriptions.addSubscription(
      this.shoppingListService.onIngredientChanged.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }));

    this.subscriptions.addSubscription(
      this.shoppingListService.onUpdateIngredients.subscribe(
        (ingredients: IIngredient[]) => {
          this.ingredients = ingredients;
        }));*/
  }

  ngOnDestroy(): void {
    //this.subscriptions.clear();
  }

  onEditItem(ingredient: IIngredient) {
    this.shoppingListService.startedEditIngredient.next(ingredient)
  }
}
