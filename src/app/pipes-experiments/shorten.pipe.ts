import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string | null, limit: number = 10): string | null {
    if(value && value.length > 10)
      return value.substring(0, limit) + '...'
    return value;
  }

}
