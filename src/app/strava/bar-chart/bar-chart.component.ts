import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StravaService} from '../services/strava.service';
import {Chart, ChartOptions} from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') ref: ElementRef;
  chart: Chart;
  public chartType = 'bar';
  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 0
    },
    hover: {
      animationDuration: 0
    },
//    sensitiveAnimationDuration: 0
  };
  public chartLabels = [];
  public chartLegend = true;
  public chartData = [];
  public colorData = [];

  constructor(private strava: StravaService) { }

  ngOnInit() {
    this.strava.getSummaryActivity().subscribe(activities => {
      const data: any[] = [];
      const label = 'average_speed';
      for (const activity of activities) {
        if (activity.type === 'Run') {
          data.push(activity.average_speed);
          this.chartLabels.push(activity.start_date_local);
        }
      }
      this.chartData.push({data, backgroundColor: 'rgb(222,22,22)', borderColor: 'rgb(222,22,22)', label});
    });
  }

  ngAfterViewInit(): void {
    const ctx = this.ref.nativeElement.getContext('2d');
    if (ctx == null) {
      return;
    }
    this.chart = new Chart(ctx,
      {
        type: 'bar',
        data: {labels: this.chartLabels, datasets: this.chartData},
        options: this.chartOptions,
      });
    this.chart.update();
  }

}
