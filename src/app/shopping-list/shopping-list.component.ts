import {Component, OnDestroy, OnInit} from '@angular/core';
import {IIngredient, Ingredient} from "../general-types/Ingredient";
import {ShoppingListService} from "../services/shopping-list.service";
import {ISubscriptionsStorage, SubscriptionsStorage} from "../general-types/SubscriptionStorage";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: IIngredient[] = [];
  private subscriptions: ISubscriptionsStorage = new SubscriptionsStorage();

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.subscriptions.addSubscription(
      this.shoppingListService.onAddIngredient.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }));

    this.subscriptions.addSubscription(
      this.shoppingListService.onIngredientsCleared.subscribe(
        () => {
          this.ingredients = [];
        }));

    this.subscriptions.addSubscription(
      this.shoppingListService.onIngredientAmountChanged.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }));

    this.subscriptions.addSubscription(
      this.shoppingListService.onUpdateIngredients.subscribe(
        (ingredients: IIngredient[]) => {
          this.ingredients = ingredients;
        }));
  }

  ngOnDestroy(): void {
    this.subscriptions.clear();
  }
}
