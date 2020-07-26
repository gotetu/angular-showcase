import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'metric'})
export class MetricConversionPipe implements PipeTransform {
    transform(value: number, metric: string): string {
        switch(metric) {
            case "m": // meter
                return value.toFixed(2);
            case "km": // kirometer
                return (value / 1000).toFixed(2);
            case "mile": // mile
                return (value / 1600).toFixed(2);
            default:
                return value.toFixed(2);
        }
    }
}