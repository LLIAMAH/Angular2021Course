import {Subscription} from "rxjs";

export interface ISubscriptionsStorage {
  addSubscription(subscription: Subscription): void;
  clear(): void;
  length(): number;
}

export class SubscriptionsStorage implements ISubscriptionsStorage {
  private subscriptions: Subscription[] = [];

  addSubscription(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }

  clear(): void {
    if (this.subscriptions) {
      while (this.subscriptions.length > 0) {
        let pop = this.subscriptions.pop();
        pop!.unsubscribe();
      }
    }
  }

  length(): number{
    return this.subscriptions.length;
  }
}
