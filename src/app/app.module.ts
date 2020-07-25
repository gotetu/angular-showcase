import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { StravaModule } from './strava/strava.module';
import { StravaService } from './strava/services/strava.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NgContainerComponent,
    NgTemplateComponent,
  ],
  imports: [
    BrowserModule,
    StravaModule,
    HttpClientModule,
  ],
  providers: [StravaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
