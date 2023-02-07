import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list.component";
import {RouterModule, Routes} from "@angular/router";

const shoppingListChildRoutes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
  imports: [RouterModule.forChild(shoppingListChildRoutes)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule { }
