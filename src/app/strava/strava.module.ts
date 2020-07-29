import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryActivityComponent } from './summary-activity/summary-activity.component';
import { MetricConversionPipe } from './pipe/metric-conversion.pipe';
import { IsoTimeConversionPipe } from './pipe/iso-time-conversion.pipe';
import { SpeedConversionPipe } from './pipe/speed-conversion.pipe';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    SummaryActivityComponent,
    MetricConversionPipe,
    IsoTimeConversionPipe,
    SpeedConversionPipe,
    BarChartComponent,
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
  ]
})
export class StravaModule { }
