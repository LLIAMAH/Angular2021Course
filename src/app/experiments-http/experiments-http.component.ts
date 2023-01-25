import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProject} from "../general-types/Project";
import {ISubscriptionsStorage, SubscriptionsStorage} from "../general-types/SubscriptionStorage";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-experiments-http',
  templateUrl: './experiments-http.component.html',
  styleUrls: ['./experiments-http.component.css']
})
export class ExperimentsHttpComponent implements OnInit, OnDestroy {
  projects: IProject[] = [];
  private subscriptions: ISubscriptionsStorage = new SubscriptionsStorage();

  constructor(private httpClient: HttpClient ) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subscriptions.clear();
  }

  onGetProjects(): void {
    this.httpClient.get('https://localhost:7035/DataApi/').subscribe(
      response => {
        this.projects.splice(0, this.projects.length);
        const results = <IProject[]>response;
        this.projects.push(...results);
      }
    )
  }

}
