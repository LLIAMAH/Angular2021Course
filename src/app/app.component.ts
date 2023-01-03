import {Component} from '@angular/core';
import {AlertType} from "./general-types/Enums";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2021Course';
  name = 'Vasiliy';
  alertType: AlertType;
  alertMessage: string;

  constructor() {
    this.alertType = AlertType.Success;
    this.alertMessage = `This is an ${this.title} experimental control!`;
  }
}
