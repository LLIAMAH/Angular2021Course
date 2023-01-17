import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ISubscriptionsStorage, SubscriptionsStorage} from "../general-types/SubscriptionStorage";

@Component({
  selector: 'app-experiments-observables',
  templateUrl: './experiments-observables.component.html',
  styleUrls: ['./experiments-observables.component.css']
})
export class ExperimentsObservablesComponent implements OnInit, OnDestroy {
  private subscriptions: ISubscriptionsStorage = new SubscriptionsStorage();

  constructor() {
  }

  ngOnInit(): void {
    const customObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.subscriptions.addSubscription(
      customObservable.pipe(map(data => {
        return `Round: ${data}`;
      })).subscribe(
        (input) => {
          console.log(input);
        },
        error => {
          console.log(error);
        },
        () => {
          console.log("Completed!");
        }
      ));
  }

  ngOnDestroy(): void {
    this.subscriptions.clear();
  }

}
