import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output()
  featureSelected = new EventEmitter<string>();
  isActiveRecipe: boolean = true;
  isActiveShoppingList: boolean = false;
  isActiveServers: boolean = false;

  onSelect(selectedFeature: string) {
    this.featureSelected.emit(selectedFeature);
    if (selectedFeature === 'recipes') {
      this.isActiveRecipe = true;
      this.isActiveShoppingList = false;
      this.isActiveServers = false;
    } else if (selectedFeature === 'shopping-list') {
      this.isActiveRecipe = false;
      this.isActiveShoppingList = true;
      this.isActiveServers = false;
    } else if (selectedFeature === 'servers') {
      this.isActiveRecipe = false;
      this.isActiveShoppingList = false;
      this.isActiveServers = true;
    }
  }
}
