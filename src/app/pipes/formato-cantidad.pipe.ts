import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoCantidad'
})
export class FormatoCantidadPipe implements PipeTransform {
  transform(value: number): string {
    let letra = '';
    let divisor = 1;
    let signo = '';
    let modifiedValue: any;

    if (value >= 1e9) {
      letra = 'B';
      divisor = 1e9;
      modifiedValue = (value / divisor).toFixed(1) + letra;      
    } else if (value >= 1e6) {
      letra = 'M';
      divisor = 1e6;
      modifiedValue = (value / divisor).toFixed(1) + letra;
    } else if (value >= 1e3) {
      letra = 'K';
      divisor = 1e3;
      modifiedValue = (value / divisor).toFixed(1) + letra;
    } else if (value >= 1e2) {
      divisor = 1;
      signo = '+';
      modifiedValue = '99' + signo;
    } else {
      modifiedValue = value;
    }

    return modifiedValue;
  }
}

