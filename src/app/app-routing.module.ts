import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServersComponent} from "./servers/servers.component";
import {UsersComponent} from "./users/users.component";
import {UserDetailComponent} from "./users/user-detail/user-detail.component";
import {UserResolverService} from "./services/user-resolver.service";
import {HomeComponent} from "./home/home.component";
import {ExperimentsObservablesComponent} from "./experiments-observables/experiments-observables.component";
import {
  ExperimentsObservablesDefaultComponent
} from "./experiments-observables/experiments-observables-default/experiments-observables-default.component";
import {
  ExperimentsObservablesUserComponent
} from "./experiments-observables/experiments-observables-user/experiments-observables-user.component";
import {FormsProcessingComponent} from "./forms-processing/forms-processing.component";
import {FormTdComponent} from "./forms-processing/form-td/form-td.component";
import {FormReactiveComponent} from "./forms-processing/form-reactive/form-reactive.component";
import {FormPersonalTaskComponent} from "./forms-processing/form-personal-task/form-personal-task.component";
import {PipesExperimentsComponent} from "./pipes-experiments/pipes-experiments.component";
import {ExperimentsHttpComponent} from "./experiments-http/experiments-http.component";
import {DataCommunicationComponent} from "./data-communication/data-communication.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servers', component: ServersComponent },
  //{ path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },
  { path: 'users',
    component: UsersComponent,
    //canActivateChild: [ AuthGuardService ],
      children: [
      { path: ':id', component: UserDetailComponent, resolve: {user: UserResolverService} }
    ] },
  { path: 'observables-experiments', component: ExperimentsObservablesComponent, children: [
      {path: '', component: ExperimentsObservablesDefaultComponent },
      {path: ':id', component: ExperimentsObservablesUserComponent }
    ] },
  { path: 'form-processing', component: FormsProcessingComponent, children: [
      { path: 'form-td', component: FormTdComponent },
      { path: 'form-reactive', component: FormReactiveComponent },
      { path: 'form-personal-task', component: FormPersonalTaskComponent }
    ] },
  { path: 'pipes', component: PipesExperimentsComponent },
  { path: 'web-processing', component: ExperimentsHttpComponent },
  { path: 'data-communication', component: DataCommunicationComponent },
  //{ path: 'not-found', component: PageNotFoundComponent },
  //{ path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
