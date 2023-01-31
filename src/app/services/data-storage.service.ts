import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  IResponseRecipe,
  IResponseRecipes,
  ResponseRecipe,
  ResponseRecipes
} from "../experiments-http/types/IResponsePost";
import {map, tap} from "rxjs/operators";
import {IResponseBool, ResponseBool, ResponseStatus} from "../general-types/IResponses";
import {Recipe} from "../general-types/Recipe";
import {RecipeService} from "./recipe.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private baseUrl: string = 'https://localhost:7035/api/RecipesBook';

  constructor(private http: HttpClient, private recipesService: RecipeService) { }

  storeRecipes(){
    const recipes = this.recipesService.getRecipes();
    for(const item of recipes){
    }
  }

  fetchRecipes() {
    return this.http.get<IResponseRecipes>(this.baseUrl)
      .pipe(map((input: IResponseRecipes) => {
          return new ResponseRecipes(input.data, new ResponseStatus(input.status.value, input.status.message));
        }),
        tap((response: IResponseRecipes) => {
          this.recipesService.setRecipes(response.data);
        }));
    /*this.getAll().subscribe((response: IResponseRecipes) => {
      this.recipesService.setRecipes(response.data);
    })*/
  }

  getAll(): Observable<IResponseRecipes> {
    return this.http.get<IResponseRecipes>(this.baseUrl)
      .pipe(map((input: IResponseRecipes) => {
        return new ResponseRecipes(input.data, new ResponseStatus(input.status.value, input.status.message));
      }));
  }

  getOne (id: number) {
    const uri = `${this.baseUrl}/${id}`;
    return this.http.get<IResponseRecipe>(uri)
      .pipe(map((input: IResponseRecipe) => {
        return new ResponseRecipe(input.data, new ResponseStatus(input.status.value, input.status.message));
      })).subscribe((response: IResponseRecipe) => {
        console.log(response);
        return response;
      });
  }

  post(recipe: Recipe) {
    return this.http.post<IResponseBool>(this.baseUrl, recipe)
      .subscribe((response:IResponseBool) => {
        console.log(response);
        return new ResponseBool(response.data, new ResponseStatus(response.status.value, response.status.message));
      })
  }

  put(id: number, recipe: Recipe) {
    const uri = `${this.baseUrl}/${id}`;
    return this.http.post<IResponseBool>(uri, recipe)
      .subscribe((response:IResponseBool) => {
        console.log(response);
        return new ResponseBool(response.data, new ResponseStatus(response.status.value, response.status.message));
      })
  }

  delete(id: number) {
    const uri = `${this.baseUrl}/${id}`;
    return this.http.delete<IResponseBool>(uri)
      .subscribe((response: IResponseBool) => {
        console.log(response);
        return new ResponseBool(response.data, new ResponseStatus(response.status.value, response.status.message));
      })
  }

}
