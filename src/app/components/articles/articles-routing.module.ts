import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidasAmistosasComponent } from './partidas-amistosas/partidas-amistosas.component';
import { AtaquesDirectosAlReyComponent } from './ataques-directos-al-rey/ataques-directos-al-rey.component';
import { PartidaTringovFischerComponent } from './partida-tringov-fischer/partida-tringov-fischer.component';

const routes: Routes = [
  { path: 'partidas-amistosas', component: PartidasAmistosasComponent, data: {animation: 'PartidasAmistosasArticle'} },
  { path: 'ataques-directos-al-rey', component: AtaquesDirectosAlReyComponent, data: {animation: 'AtaquesDirectosAlReyArticle'} },
  { path: 'partida-tringov-fischer', component: PartidaTringovFischerComponent, data: {animation: 'PartidaTringovFischerArticle'} },
  { path: '**', redirectTo: 'partidas-amistosas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
