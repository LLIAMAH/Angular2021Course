import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import {RecipeListComponent} from "./recipes/recipe-list/recipe-list.component";
import {RecipeItemComponent} from "./recipes/recipe-list/recipe-item/recipe-item.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {LoggingService} from "./services/logging.service";
import { ServersComponent } from './servers/servers.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';
import { ServersListComponent } from './servers/servers-list/servers-list.component';
import { ServerItemComponent } from './servers/servers-list/server-item/server-item.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeItemDefaultComponent } from './recipes/recipe-item-default/recipe-item-default.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    ShoppingEditComponent,
    ServersComponent,
    ServerEditComponent,
    ServersListComponent,
    ServerItemComponent,
    HomeComponent,
    UsersComponent,
    UserDetailComponent,
    PageNotFoundComponent,
    RecipeItemDefaultComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
