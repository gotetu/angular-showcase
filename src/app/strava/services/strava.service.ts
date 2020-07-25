import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SummaryActivity } from '../models/SummaryActivity.model';

@Injectable({
  providedIn: 'root'
})
export class StravaService {
  private targetUrl = '/assets/response/response.json'

  constructor(private http: HttpClient) { }

  getSummaryActivity(): Observable<SummaryActivity[]> {
    return this.http.get<SummaryActivity[]>(this.targetUrl);
  }
}
