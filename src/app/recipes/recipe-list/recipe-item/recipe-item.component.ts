import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../../general-types/objects";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input()
  recipeItem!: Recipe;

  @Output()
  onItemSelected = new EventEmitter<void>();

  onSelected(): void {
    this.onItemSelected.emit();
  }
}
