import {Component, Input, OnInit} from '@angular/core';
import {EnumResponseStatus} from "../general-types/IResponse";

export enum EnumAlertType {
  Unknown,
  Primary,
  Secondary,
  Success,
  Danger,
  Warning,
  Info,
  Light,
  Dark,
}

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
      // case EnumAlertType.Primary:
      //   return 'alert-primary';
      // case EnumAlertType.Secondary:
      //   return 'alert-secondary';
      // case EnumAlertType.Success:
      //   return 'alert-success';
      // case EnumAlertType.Danger:
      //   return 'alert-danger';
      // case EnumAlertType.Warning:
      //   return 'alert-warning';
      // case EnumAlertType.Info:
      //   return 'alert-info';
      // case EnumAlertType.Light:
      //   return 'alert-light';
      // case EnumAlertType.Dark:
      //   return 'alert-dark';
      default:
        return '';
    }
  }
}
