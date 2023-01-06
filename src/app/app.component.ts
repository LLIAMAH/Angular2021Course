import {Component} from '@angular/core';
import {LoggingService} from "./services/logging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
})
export class AppComponent {
  loadedFeature = 'recipes';

  constructor(private log: LoggingService) {
  }

  onNavigate(featureSelected: string) {
    this.loadedFeature = featureSelected;
    this.log.WriteLog('Test message')
  }
}
