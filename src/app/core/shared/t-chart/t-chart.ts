import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHourglass, faRocket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-t-chart',
  imports: [FontAwesomeModule],
  templateUrl: './t-chart.html',
  styleUrl: './t-chart.css'
})
export class TChart {
faHourglass = faHourglass;
faRocket = faRocket;
}
