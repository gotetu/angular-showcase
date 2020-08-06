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
      const dataAverageSpeed: any[] = [];
      const dataDistance: any[] = [];
      const dataMobingTime: any[] = [];
      const labelAverageSpeed = 'average_speed';
      const labelDistance = 'distance';
      const labelMovingTime = 'moving_time';
      for (const activity of activities) {
        // ランニングかつ距離がハーフ（21km〜22km）かつレースではないもの
        if (activity.type === 'Run'
          && activity.distance > 21000 && activity.distance < 22000
          && activity.workout_type !== 1) {
          dataAverageSpeed.push(activity.average_speed);
          dataDistance.push(activity.distance);
          dataMobingTime.push(activity.moving_time);
          this.chartLabels.push(activity.start_date_local);
        }
      }
      this.chartData.push({data: dataAverageSpeed, backgroundColor: 'rgb(222,22,22)', borderColor: 'rgb(222,22,22)', labelAverageSpeed});
//      this.chartData.push({data: dataDistance, backgroundColor: 'rgb(111,11,11)', borderColor: 'rgb(111,11,11)', labelDistance});
      this.chartData.push({data: dataMobingTime, backgroundColor: 'rgb(333,33,33)', borderColor: 'rgb(333,33,33)', labelMovingTime});
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
