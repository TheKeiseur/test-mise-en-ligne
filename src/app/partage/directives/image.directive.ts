import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImage]'
})
export class ImageDirective {

  private url : string = "https://source.unsplash.com/random/200x300/"

  constructor(balise : ElementRef) {
    balise.nativeElement.src = this.url;
    balise.nativeElement.addEventListener("click", (e : Event) => {
      if(e.target instanceof HTMLImageElement) {
        e.target.classList.toggle("border");
      }
    })
   }

}
