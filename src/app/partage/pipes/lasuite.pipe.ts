import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

@Pipe({
  name: 'lasuite'
})
export class LasuitePipe implements PipeTransform {

  transform(value: string, max : number = 10): unknown {
    return value.split(' ').slice(0, max).join(' ');
  }

}
