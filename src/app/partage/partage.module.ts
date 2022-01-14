import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeFr from "@angular/common/locales/fr";
registerLocaleData(localeFr, "fr");

import { LasuitePipe } from './pipes/lasuite.pipe';
import { TitrePipe } from './pipes/titre.pipe';

import { ImageDirective } from './directives/image.directive';
import { ParagraphDirective } from './directives/paragraph.directive';
import { BtnDirective } from './directives/btn.directive';
import { TitreDirective } from './directives/titre.directive';


@NgModule({
  declarations: [
    ImageDirective,
    ParagraphDirective,
    BtnDirective,
    TitreDirective,
    LasuitePipe,
    TitrePipe,
  ],
  exports: [
    ImageDirective,
    ParagraphDirective,
    BtnDirective,
    TitreDirective,
    LasuitePipe,
    TitrePipe,
  ]
})
export class PartageModule { }
