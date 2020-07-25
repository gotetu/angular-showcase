import { Component, OnInit } from '@angular/core';
import { StravaService } from '../services/strava.service';

@Component({
  selector: 'app-summary-activity',
  templateUrl: './summary-activity.component.html',
  styleUrls: ['./summary-activity.component.css']
})
export class SummaryActivityComponent implements OnInit {
  summary;

  constructor(private strava: StravaService) { }

  ngOnInit(): void {
    this.summary = this.strava.getSummaryActivity();
  }

}
