import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
/* import {MatSnackBarModule} from '@angular/material/snack-bar'; */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule
    /* MatSnackBarModule */
  ],
  exports: [
    MatToolbarModule
    /* MatSnackBarModule */
  ]
})
export class MiModuloModule { }
