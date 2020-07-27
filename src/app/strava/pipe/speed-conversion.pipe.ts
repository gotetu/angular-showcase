import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'speed'})
export class SpeedConversionPipe implements PipeTransform {
    transform(value: number): string {
        if (value === 0) {
            return '0:00';
        }
        let minuts = Math.floor(1 / ((value * 60) / 1000));
        let seconds = (1 / ((value * 60) / 1000)) - minuts;
        return minuts + ':' + ('00' + (60 * seconds).toFixed(0)).slice(-2);
    }
}