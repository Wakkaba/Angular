import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: number, args: string): any {
    return '/ ' + Math.round(value / 24.4 ) + '$';
  }

}
