import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageSpeedChartComponent } from './average-speed-chart.component';

describe('AverageSpeedChartComponent', () => {
  let component: AverageSpeedChartComponent;
  let fixture: ComponentFixture<AverageSpeedChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageSpeedChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageSpeedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
