import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomseguroPipe } from './domseguro.pipe';
import { OrderbyPipe } from './orderby.pipe';
import { FormatoCantidadPipe } from './formato-cantidad.pipe';

@NgModule({
  declarations: [
    DomseguroPipe,
    OrderbyPipe,
    FormatoCantidadPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DomseguroPipe,
    OrderbyPipe,
    FormatoCantidadPipe
  ]
})
export class PipesModule { }
