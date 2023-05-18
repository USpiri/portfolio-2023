import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 35) {
      return (
        value.substring(0, 10) + '...' + value.substring(value.length - 10)
      );
    } else {
      return value;
    }
  }
}
