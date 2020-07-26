import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryActivityComponent } from './summary-activity/summary-activity.component';
import { MetricConversionPipe } from './pipe/metric-conversion.pipe';
import { IsoTimeConversionPipe } from './pipe/iso-time-conversion.pipe';

@NgModule({
  declarations: [
    SummaryActivityComponent,
    MetricConversionPipe,
    IsoTimeConversionPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SummaryActivityComponent,
    MetricConversionPipe,
    IsoTimeConversionPipe,
  ]
})
export class StravaModule { }
