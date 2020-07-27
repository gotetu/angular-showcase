import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryActivityComponent } from './summary-activity/summary-activity.component';
import { MetricConversionPipe } from './pipe/metric-conversion.pipe';
import { IsoTimeConversionPipe } from './pipe/iso-time-conversion.pipe';
import { SpeedConversionPipe } from './pipe/speed-conversion.pipe';

@NgModule({
  declarations: [
    SummaryActivityComponent,
    MetricConversionPipe,
    IsoTimeConversionPipe,
    SpeedConversionPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SummaryActivityComponent,
    MetricConversionPipe,
    IsoTimeConversionPipe,
    SpeedConversionPipe,
  ]
})
export class StravaModule { }
