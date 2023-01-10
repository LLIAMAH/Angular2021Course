import {Component, OnInit} from '@angular/core';
import {IIngredient, Ingredient} from "../general-types/Ingredient";
import {ShoppingListService} from "../services/shopping-list.service";
import {LoggingService} from "../services/logging.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IIngredient[] = [];

  constructor(private shoppingListService: ShoppingListService, private log: LoggingService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.onAddIngredient.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );

    this.shoppingListService.onIngredientsCleared.subscribe(
      () => {
        this.ingredients = [];
      }
    );

    this.shoppingListService.onIngredientAmountChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );

    this.shoppingListService.onUpdateIngredients.subscribe(
        (ingredients: IIngredient[]) => {
        this.ingredients = ingredients;
        this.log.WriteLog('onUpdateIngredients triggered.');
      }
    );
  }
}
