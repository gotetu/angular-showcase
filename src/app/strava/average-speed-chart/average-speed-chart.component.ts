import {AfterViewInit, Component, ElementRef, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import {Chart, ChartOptions} from 'chart.js';
import {StravaService} from '../services/strava.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-average-speed-chart',
  templateUrl: './average-speed-chart.component.html',
  styleUrls: ['./average-speed-chart.component.css']
})
export class AverageSpeedChartComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') ref: ElementRef;
  chart: Chart;
  public chartType = 'line';
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
        scaleLabel: {
          display: true,
          labelString: 'average_speed(meter per seconds)',
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'activity date',
        }
      }],
    },
  };
  public chartLabels = [];
  public chartData = [];
  public colorData = [];

  public dataAverageSpeed: any[] = [];

  constructor(private strava: StravaService,
              @Inject(LOCALE_ID) private locale: string) {
    this.strava.getSummaryActivity().subscribe(activities => {
      activities.reverse().forEach(activity => {
        // ランニングかつ距離がハーフ（21km〜22km）かつレースではないもの
        if (activity.type === 'Run'
          && activity.distance > 21000 && activity.distance < 22000
          && activity.workout_type !== 1) {
          this.dataAverageSpeed.push(activity.average_speed);
          this.chartLabels.push(formatDate(activity.start_date_local, 'yyyy/MM/dd', this.locale));
        }
      });
    },
      error => {},
      () => {
      this.chart.update();
      });
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    const ctx = this.ref.nativeElement.getContext('2d');
    if (ctx == null) {
      return;
    }
    this.chart = new Chart(ctx,
      {
        type: 'line',
        data: {
          datasets: [{
            label: 'average_speed',
            data: this.dataAverageSpeed,
            backgroundColor: 'rgba(13,212,238,0.1)',
            borderColor: 'rgb(24,186,250)',
            fill: false,
            showLine: false,
          }],
          labels: this.chartLabels,
        },
        options: this.chartOptions,
      });
  }

}
