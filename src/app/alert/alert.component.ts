import {Component, Input} from '@angular/core';
import {AlertType} from "../general-types/Enums";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input()
  alertType: AlertType = AlertType.Warning;
  @Input()
  message: string = "";

  getValidClass():string {
    switch (this.alertType) {
      case AlertType.Primary:
        return "primary";
      case AlertType.Secondary:
        return "secondary";
      case AlertType.Success:
        return "success";
      case AlertType.Danger:
        return "danger";
      case AlertType.Warning:
        return "warning";
      case AlertType.Info:
        return "info";
      case AlertType.Light:
        return "light";
      case AlertType.Dark:
        return "dark";
      default:
        return "info";
    }
  }
}
