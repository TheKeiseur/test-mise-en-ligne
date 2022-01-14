import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTitre]'
})
export class TitreDirective implements OnInit {

  @Input("appTitre") appTitre : string | boolean | undefined;

  constructor(private balise : ElementRef) { }

  ngOnInit(): void {
    if(this.balise.nativeElement instanceof HTMLHeadElement && this.balise.nativeElement.nodeName === 'H1') {
      if(this.appTitre) {
        this.balise.nativeElement.style.textAlign = "center"
      } else {
        this.balise.nativeElement.style.textDecoration = "underline";
      }
    }

  }

}
