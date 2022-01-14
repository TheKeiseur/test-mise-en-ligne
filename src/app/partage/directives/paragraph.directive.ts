import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appParagraph]'
})
export class ParagraphDirective implements OnInit {

  @Input("appParagraph") appParagraph : string | boolean | undefined;

  constructor(private balise : ElementRef) {  }
  
  ngOnInit(): void {
    if(this.appParagraph) {
      this.balise.nativeElement.innerHTML = "je viens de remplir la balise avec une directive";
    } else {
      this.balise.nativeElement.innerHTML = "veuillez remplir la directive avec true";
    }
  }

}
