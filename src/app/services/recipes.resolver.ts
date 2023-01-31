import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {DataStorageService} from "./data-storage.service";
import {IResponseRecipes} from "../experiments-http/types/IResponsePost";

@Injectable({
  providedIn: 'root'
})
export class RecipesResolver implements Resolve<IResponseRecipes> {

  constructor(private dataStorageService: DataStorageService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IResponseRecipes> {
    return this.dataStorageService.fetchRecipes();

  }
}
