import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {DataStorageService} from "./data-storage.service";
import {IResponseRecipes, ResponseRecipes} from "../experiments-http/types/IResponsePost";
import {RecipeService} from "./recipe.service";
import {EnumResponseStatus, ResponseStatus} from "../general-types/IResponses";

@Injectable({
  providedIn: 'root'
})
export class RecipesResolver implements Resolve<IResponseRecipes> {

  constructor(private dataStorageService: DataStorageService, private recipesService: RecipeService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IResponseRecipes> {
    const recipes = this.recipesService.getRecipes()
    if (recipes.length === 0)
      return this.dataStorageService.fetchRecipes();
    else
      return of(new ResponseRecipes(recipes, new ResponseStatus(EnumResponseStatus.OK)));
  }
}
