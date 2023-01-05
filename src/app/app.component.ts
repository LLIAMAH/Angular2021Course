import {Component} from '@angular/core';
import {IServer, Server} from "./general-types/objects";
import {EnumFeatureSelected} from "./general-types/Enums";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: IServer[] = [new Server('Server (default)', 'Just a server default value.', 'server')];
  counter: number = 0;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  loadedFeature = EnumFeatureSelected.Recipes
  loadRecipes: boolean = this.loadedFeature == EnumFeatureSelected.Recipes;
  loadShoppingList: boolean = this.loadedFeature == EnumFeatureSelected.ShoppingList;

  constructor() {
  }

  onServerAdded(serverData: HTMLFormElement): void {
    console.log(serverData);
    //this.counter++;
    //this.servers.push(new Server(serverData.value + this.counter, 'Server added', serverData.type))
  }

  onBlueprintAdded(serverData: HTMLFormElement): void {
    console.log(serverData);
    //this.counter++;
    //this.servers.push(new Server(serverData.title + this.counter, 'Blueprint added', serverData.type))
  }

  onIntervalFired(firedNumber: number) {
    if ((firedNumber % 2) === 0)
      this.evenNumbers.push(firedNumber);
    else
      this.oddNumbers.push(firedNumber);
  }

  onNavigate(featureSelected: EnumFeatureSelected) {
    console.log('onNavigate: ' + featureSelected)
    this.loadedFeature = featureSelected;
  }

  checkRecipe(): boolean {
    return this.loadedFeature === EnumFeatureSelected.Recipes;
  }

  checkShoppingList(): boolean {
    return this.loadedFeature === EnumFeatureSelected.ShoppingList;
  }
}
