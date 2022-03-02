import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomseguroPipe } from './domseguro.pipe';
import { OrderbyPipe } from './orderby.pipe';

@NgModule({
  declarations: [
    DomseguroPipe,
    OrderbyPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DomseguroPipe,
    OrderbyPipe
  ]
})
export class PipesModule { }
