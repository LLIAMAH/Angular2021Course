import {Component, Input, OnInit} from '@angular/core';
import {EnumResponseStatus} from "../general-types/IResponses";

@Component({
  selector: 'app-alert-control',
  templateUrl: './alert-control.component.html',
  styleUrls: ['./alert-control.component.css']
})
export class AlertControlComponent implements OnInit {
  @Input()
  message: string = '';
  @Input()
  status!: EnumResponseStatus;

  alertClass: string = '';

  ngOnInit(): void {
    this.alertClass = this.getClass();
  }

  private getClass(): string {
    switch (this.status) {
      case EnumResponseStatus.Warning:
        return 'alert-warning';
      case EnumResponseStatus.Error:
        return 'alert-danger';
      default:
        return '';
    }
  }
}
