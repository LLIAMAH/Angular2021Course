import {Component, Input, Output} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-alert-control',
  templateUrl: './alert-control.component.html',
  styleUrls: ['./alert-control.component.css']
})
export class AlertControlComponent {
  @Input()
  message: string = '';

  @Output()
  close: Subject<void> = new Subject();

  onClose() {
    this.close.next();
  }
}
