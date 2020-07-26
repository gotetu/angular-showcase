import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryActivityComponent } from './summary-activity/summary-activity.component';
import { MetricConversionPipe } from './pipe/metric-conversion.pipe';

@NgModule({
  declarations: [
    SummaryActivityComponent,
    MetricConversionPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SummaryActivityComponent,
    MetricConversionPipe,
  ]
})
export class StravaModule { }
