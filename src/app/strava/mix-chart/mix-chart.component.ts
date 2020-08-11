import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart, ChartOptions} from 'chart.js';
import {StravaService} from '../services/strava.service';

@Component({
  selector: 'app-mix-chart',
  templateUrl: './mix-chart.component.html',
  styleUrls: ['./mix-chart.component.css']
})
export class MixChartComponent implements OnInit, AfterViewInit {
  @ViewChild('mcanvas') ref: ElementRef;
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
    scales: {
      yAxes: [{
        id: 'axis_average_speed',
        type: 'linear',
        position: 'left'
      }, {
        id: 'axis_distance',
        type: 'linear',
        position: 'right',
      }]
    }
  };
  public chartLabels = [];
  public chartData = [];
  public colorData = [];

  public dataAverageSpeed: any[] = [];
  public dataDistance: any[] = [];
  public dataMobingTime: any[] = [];

  constructor(private strava: StravaService) { }

  ngOnInit() {
    this.strava.getSummaryActivity().subscribe(activities => {
      for (const activity of activities) {
        // ランニングかつ距離がハーフ（21km〜22km）かつレースではないもの
        if (activity.type === 'Run'
          && activity.distance > 21000 && activity.distance < 22000
          && activity.workout_type !== 1) {
          this.dataAverageSpeed.push(activity.average_speed);
          this.dataDistance.push(activity.distance);
          this.dataMobingTime.push(activity.moving_time);
          this.chartLabels.push(activity.start_date_local);
        }
      }
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
        data: {
          datasets: [{
            label: 'average_speed',
            data: this.dataAverageSpeed,
            type: 'line',
            yAxisID: 'axis_average_speed',
          }, {
            label: 'distance',
            data: this.dataDistance,
            type: 'bar',
            yAxisID: 'axis_distance',
          }],
          labels: this.chartLabels,
        },
        options: this.chartOptions,
      });
    this.chart.update();
  }

}
