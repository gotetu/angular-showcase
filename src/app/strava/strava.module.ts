import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryActivityComponent } from './summary-activity/summary-activity.component';

@NgModule({
  declarations: [
    SummaryActivityComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SummaryActivityComponent,
  ]
})
export class StravaModule { }
