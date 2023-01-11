import {Component} from '@angular/core';
import {ShoppingListService} from "./services/shopping-list.service";
import {RecipeService} from "./services/recipe.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    RecipeService,
    ShoppingListService
  ]
})
export class AppComponent {
  loadedFeature = 'recipes';

  constructor() { }

  onNavigate(featureSelected: string) {
    this.loadedFeature = featureSelected;
  }
}
