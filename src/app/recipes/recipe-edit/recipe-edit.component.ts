import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private id: number = 0;
  edit: boolean = false;
  private subscription?: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = Number(params['id']);
        this.edit = params['id'] != null; // params['edit'] != undefined;
        console.log(this.edit);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription!.unsubscribe();
  }

}
