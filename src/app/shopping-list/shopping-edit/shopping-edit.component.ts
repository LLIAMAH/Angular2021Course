import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from "../../services/shopping-list.service";
import {NgForm} from "@angular/forms";
import {ISubscriptionsStorage, SubscriptionsStorage} from "../../general-types/SubscriptionStorage";
import {IIngredient, Ingredient} from "../../general-types/Ingredient";
import {Store} from "@ngrx/store";
import {IngredientsState} from "../store/shopping-list.reducer";
import * as shoppingListActions from "../store/shopping-list.actions";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form!: NgForm;
  private subscriptions: ISubscriptionsStorage = new SubscriptionsStorage();
  editMode: boolean = false;
  editedItem!: IIngredient;

  constructor(private shoppingListService: ShoppingListService,
              private store: Store<{ shoppingList: IngredientsState }>) { }
  onClearItems(): void {
    this.editMode = false;
    this.form.reset();
  }

  onAddItem(f: NgForm) {
    const value = f.value;
    const ingredient = new Ingredient(value.name, Number(value.amount));
    if (this.editMode) {
      this.shoppingListService.editIngredient(ingredient);
    } else {
      this.store.dispatch(new shoppingListActions.AddIngredient(ingredient));
      //this.shoppingListService.addIngredient(value.name, Number(value.amount));
    }

    this.editMode = false;
    f.reset();
  }

  ngOnInit(): void {
    this.subscriptions.addSubscription(this.shoppingListService.startedEditIngredient.subscribe(
      (ingredient: IIngredient) => {
        this.editMode = true;
        this.editedItem = ingredient;
        this.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.clear();
  }

  onDeleteItem(f: NgForm) {
    let values = f.value;
    if (values.name === '')
      return;

    if(this.shoppingListService.deleteIngredient(values.name)){
      this.shoppingListService.onUpdateList.next();
    }
  }
}
