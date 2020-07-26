import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'iso_time'})
export class IsoTimeConversionPipe implements PipeTransform {
    transform(value: number): string {
        var date = new Date(0);
        date.setSeconds(value);
        return date.toISOString().substr(11, 8);
    }
}