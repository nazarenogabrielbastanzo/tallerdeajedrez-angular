import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { AtaquesDirectosAlReyComponent } from './ataques-directos-al-rey/ataques-directos-al-rey.component';
import { PartidaTringovFischerComponent } from './partida-tringov-fischer/partida-tringov-fischer.component';
import { PartidasAmistosasComponent } from './partidas-amistosas/partidas-amistosas.component';
import { NgMaterialModule } from '../../modules/ng-material/ng-material.module';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    ArticlesComponent,
    AtaquesDirectosAlReyComponent,
    PartidaTringovFischerComponent,
    PartidasAmistosasComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    NgMaterialModule,
    PipesModule
  ]
})
export class ArticlesModule { }
