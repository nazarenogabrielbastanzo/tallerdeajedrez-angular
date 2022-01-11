import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { NgMaterialModule } from '../../modules/ng-material/ng-material.module';
import { PaginationComponent } from './pagination/pagination.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    FooterComponent,
    LoadingComponent,
    ScrollTopComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    NgbModule,
    NgbPaginationModule,
  ],
  exports: [
    FooterComponent,
    LoadingComponent,
    ScrollTopComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
