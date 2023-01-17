import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ISubscriptionsStorage, SubscriptionsStorage} from "../../general-types/SubscriptionStorage";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private id: number = 0;
  edit: boolean = false;
  private subscriptions: ISubscriptionsStorage = new SubscriptionsStorage();

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscriptions.addSubscription(
      this.route.params.subscribe(
        (params: Params) => {
          this.id = Number(params['id']);
          this.edit = params['id'] != null; // params['edit'] != undefined;
          console.log(this.edit);
        }));
  }

  ngOnDestroy(): void {
    this.subscriptions.clear();
  }

}
