import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  private id: number = 0;
  edit: boolean = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = Number(params['id']);
        this.edit = params['id'] != null; // params['edit'] != undefined;
        console.log(this.edit);
      }
    );
  }

}
