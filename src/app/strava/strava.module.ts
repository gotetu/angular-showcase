import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryActivityComponent } from './summary-activity/summary-activity.component';
import { MetricConversionPipe } from './pipe/metric-conversion.pipe';
import { IsoTimeConversionPipe } from './pipe/iso-time-conversion.pipe';
import { SpeedConversionPipe } from './pipe/speed-conversion.pipe';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import {ChartsModule} from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { MixChartComponent } from './mix-chart/mix-chart.component';
import { AverageSpeedChartComponent } from './average-speed-chart/average-speed-chart.component';

@NgModule({
  declarations: [
    SummaryActivityComponent,
    MetricConversionPipe,
    IsoTimeConversionPipe,
    SpeedConversionPipe,
    BarChartComponent,
    LineChartComponent,
    MixChartComponent,
    AverageSpeedChartComponent,
  ],
    imports: [
        CommonModule,
        ChartsModule
    ],
  exports: [
    CommonModule,
    SummaryActivityComponent,
    MetricConversionPipe,
    IsoTimeConversionPipe,
    SpeedConversionPipe,
    BarChartComponent,
    LineChartComponent,
    MixChartComponent,
    AverageSpeedChartComponent,
  ]
})
export class StravaModule { }
