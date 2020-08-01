import {Component, OnInit, ViewChild} from '@angular/core';
import {StravaService} from '../services/strava.service';
import {BaseChartDirective, Color} from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  public chartType = 'bar';
  public chartOptions = { };
  public chartLabels = [];
  public chartLegend = true;
  public chartData = [{data: [] , label: ''}];
  public colorData = [];

  constructor(private strava: StravaService) { }

  ngOnInit(): void {
    this.strava.getSummaryActivity().subscribe(activities => {
      const data: any[] = [];
      const label = 'average_speed';
      for (const activity of activities) {
        if (activity.type === 'Run') {
          data.push(activity.average_speed);
          this.chartLabels.push(activity.start_date_local);
        }
      }
      this.chartData.push({ label, data });
    });
    this.chart.chart.config.data.labels = this.chartLabels;
    this.chart.chart.config.data.datasets = this.colorData;
    this.chart.chart.update();
  }

}
