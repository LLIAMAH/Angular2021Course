import {Component, Input} from '@angular/core';
import {Recipe} from "../../general-types/objects";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input()
  recipe!: Recipe;


}
