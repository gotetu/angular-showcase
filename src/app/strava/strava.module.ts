import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StravaService } from './services/strava.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    StravaService,
  ]
})
export class StravaModule { }
