import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { LoggingService } from "./services/logging.service";
import { ServersComponent } from './servers/servers.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';
import { ServersListComponent } from './servers/servers-list/servers-list.component';
import { ServerItemComponent } from './servers/servers-list/server-item/server-item.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExperimentsObservablesComponent } from './experiments-observables/experiments-observables.component';
import { ExperimentsObservablesDefaultComponent } from './experiments-observables/experiments-observables-default/experiments-observables-default.component';
import { ExperimentsObservablesUserComponent } from './experiments-observables/experiments-observables-user/experiments-observables-user.component';
import { FormsProcessingComponent } from './forms-processing/forms-processing.component';
import { FormTdComponent } from './forms-processing/form-td/form-td.component';
import { FormReactiveComponent } from './forms-processing/form-reactive/form-reactive.component';
import { FormPersonalTaskComponent } from './forms-processing/form-personal-task/form-personal-task.component';
import { PipesExperimentsComponent } from './pipes-experiments/pipes-experiments.component';
import { ShortenPipe } from './pipes-experiments/shorten.pipe';
import { FilterPipe } from './pipes-experiments/filter.pipe';
import { ExperimentsHttpComponent } from './experiments-http/experiments-http.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AlertControlComponent } from './alert-control/alert-control.component';
import {LoggingInterceptor} from "./experiments-http/types/logging.interceptor";
import { DataCommunicationComponent } from './data-communication/data-communication.component';
import { DataParentComponent } from './data-communication/data-parent/data-parent.component';
import { DataChild1Component } from './data-communication/data-child1/data-child1.component';
import { DataChild2Component } from './data-communication/data-child2/data-child2.component';
import { DataChild2ItemComponent } from './data-communication/data-child2/data-child2-item/data-child2-item.component';
import { RecipesModule } from "./recipes/recipes.module";
import { RecipesRoutingModule } from "./recipes/recipes-routing.module";
import { ShoppingListModule } from  "./shopping-list/shopping-list.module";
import { ShoppingListRoutingModule } from "./shopping-list/shopping-list-routing.module"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServersComponent,
    ServerEditComponent,
    ServersListComponent,
    ServerItemComponent,
    HomeComponent,
    UsersComponent,
    UserDetailComponent,
    PageNotFoundComponent,
    ExperimentsObservablesComponent,
    ExperimentsObservablesDefaultComponent,
    ExperimentsObservablesUserComponent,
    FormsProcessingComponent,
    FormTdComponent,
    FormReactiveComponent,
    FormPersonalTaskComponent,
    PipesExperimentsComponent,
    ShortenPipe,
    FilterPipe,
    ExperimentsHttpComponent,
    AlertControlComponent,
    DataCommunicationComponent,
    DataParentComponent,
    DataChild1Component,
    DataChild2Component,
    DataChild2ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    RecipesModule,
    RecipesRoutingModule,
    ShoppingListModule,
    ShoppingListRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
