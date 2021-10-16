import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ArticlesComponent } from './articles.component';
import { PartidasAmistosasComponent } from './partidas-amistosas/partidas-amistosas.component';
import { AtaquesDirectosAlReyComponent } from './ataques-directos-al-rey/ataques-directos-al-rey.component';
import { PartidaTringovFischerComponent } from './partida-tringov-fischer/partida-tringov-fischer.component';

const routes: Routes = [
  // { path: '', component: ArticlesComponent },
  { path: 'partidas-amistosas', component: PartidasAmistosasComponent },
  { path: 'ataques-directos-al-rey', component: AtaquesDirectosAlReyComponent },
  { path: 'partida-tringov-fischer', component: PartidaTringovFischerComponent },
  { path: '**', redirectTo: 'partidas-amistosas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
