import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ServersComponent} from "./servers/servers.component";
import {UsersComponent} from "./users/users.component";
import {UserDetailComponent} from "./users/user-detail/user-detail.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {UserResolverService} from "./services/user-resolver.service";
import {HomeComponent} from "./home/home.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeItemDefaultComponent} from "./recipes/recipe-item-default/recipe-item-default.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
  //{ path: 'recipes', component: RecipesComponent },
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeItemDefaultComponent },
      { path: ':id', component: RecipeDetailComponent }
    ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'users',
    component: UsersComponent,
    canActivateChild: [ AuthGuardService ],
      children: [
      { path: ':id', component: UserDetailComponent, resolve: {user: UserResolverService} }
    ] },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  //imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
