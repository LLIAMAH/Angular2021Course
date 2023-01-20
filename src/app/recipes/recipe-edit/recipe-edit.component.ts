import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ISubscriptionsStorage, SubscriptionsStorage} from "../../general-types/SubscriptionStorage";
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../../services/recipe.service";
import {Recipe} from "../../general-types/Recipe";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private id: number = 0;
  edit: boolean = false;
  private subscriptions: ISubscriptionsStorage = new SubscriptionsStorage();
  recipeForm!: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.subscriptions.addSubscription(
      this.route.params.subscribe(
        (params: Params) => {
          this.id = Number(params['id']);
          this.edit = params['id'] != null; // params['edit'] != undefined;
          this.initForm();
        }));
  }

  private initForm(): void {
    let recipe!: Recipe;
    let id = 0;
    let title = '';
    let description = '';
    let imagePath = '';
    let recipeIngredients:FormArray<FormGroup> = new FormArray<FormGroup>([]);

    if (this.edit) {
      recipe = this.recipeService.getRecipe(this.id);
      id = recipe.id;
      title = recipe.title;
      description = recipe.description;
      imagePath = recipe.imagePath;
      if (recipe.ingredients.length > 0) {
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name' : new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'id': new FormControl(id),
      'title': new FormControl(title, Validators.required),
      'description': new FormControl(description, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'ingredients': recipeIngredients
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.clear();
  }

  getIngredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  onSubmit(): void {
    if(this.recipeForm.valid){
      if (this.edit){
        this.recipeService.updateRecipe(this.id, this.recipeForm.value);
      }
      else {
        this.recipeService.addRecipe(this.recipeForm.value);
      }
    }
  }

  getIngredientCtrls(): AbstractControl<any,any>[]{
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }
}
