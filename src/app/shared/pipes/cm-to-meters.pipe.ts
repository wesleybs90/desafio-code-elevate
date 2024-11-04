import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cmToMeters',
  standalone: true
})
export class CmToMetersPipe implements PipeTransform {

  // Convert centimeters to meters
  transform(value: number | string | undefined): string {
    if (!value) {
      return '-';
    }

    if (typeof value === 'string') {
      value = parseFloat(value);
    }

    if (isNaN(value)) {
      return '-';
    }
    
    return (value / 100).toFixed(2) + ' m';
  }

}
