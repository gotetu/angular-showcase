import { Component, OnInit } from '@angular/core';
import {StravaService} from '../services/strava.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  public chartType = 'bar';

  public chartOptions = { };

  public chartLabels = [];
  public chartLegend = true;

  public chartData = [];

  constructor(private strava: StravaService) { }

  ngOnInit(): void {
    this.strava.getSummaryActivity().subscribe(activities => {
      const data: number[] = [];
      const label = 'average_speed';
      for (const activity of activities) {
        if (activity.type === 'Run') {
          data.push(activity.average_speed);
        }
      }
      this.chartData.push({data, label});
    });
  }

}
