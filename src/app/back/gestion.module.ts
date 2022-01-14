import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { GestionComponent } from './gestion.component';
import { FormComponent } from './form.component';



@NgModule({
  declarations: [
    GestionComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class GestionModule { }
