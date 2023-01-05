import {Component, EventEmitter, Output} from '@angular/core';
import {EnumFeatureSelected} from "../general-types/Enums";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output()
  featureSelected = new EventEmitter<EnumFeatureSelected>();
  isActiveRecipe: boolean = true;
  isActiveShoppingList: boolean = false;

  onSelect(selectedFeature: string) {
    console.log(selectedFeature);
    if (selectedFeature === 'recipes') {
      this.isActiveRecipe = true;
      this.isActiveShoppingList = !this.isActiveRecipe;
      this.featureSelected.emit(EnumFeatureSelected.Recipes);
    } else if (selectedFeature === 'shopping-list') {
      this.isActiveShoppingList = true;
      this.isActiveRecipe = !this.isActiveShoppingList;
      this.featureSelected.emit(EnumFeatureSelected.ShoppingList);
    }
  }
}
