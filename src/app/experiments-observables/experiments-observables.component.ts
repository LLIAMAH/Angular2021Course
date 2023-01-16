import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-experiments-observables',
  templateUrl: './experiments-observables.component.html',
  styleUrls: ['./experiments-observables.component.css']
})
export class ExperimentsObservablesComponent implements OnInit, OnDestroy {

  private subscribed!: Subscription;

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

    this.subscribed = customObservable.pipe(map(data => {
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
    );
    /*this.subscribed = interval(1000).subscribe(
      (count => {
        console.log(count);
      })
    )*/
  }

  ngOnDestroy(): void {
    this.subscribed.unsubscribe();
  }

}
