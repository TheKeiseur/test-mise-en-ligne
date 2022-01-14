import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titre'
})
export class TitrePipe implements PipeTransform {

  transform(value: string, contenu : string): unknown {
    if(contenu.split(" ").length >=20) {
      return value + " ⭐"
    }
    return value + " 🍎";
  }

}
