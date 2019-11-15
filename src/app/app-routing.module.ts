import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PartidasComponent } from './components/partidas/partidas.component';
import { TorneosComponent } from './components/torneos/torneos.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { FotoComponent } from './components/foto/foto.component';
import { FrasesComponent } from './components/frases/frases.component';
import { DispositivosComponent } from './components/dispositivos/dispositivos.component';
import { PartidasAmistosasComponent } from './components/partidas-amistosas/partidas-amistosas.component';
import { PartidaTringovFischerComponent } from './components/partida-tringov-fischer/partida-tringov-fischer.component';
import { PartidaComponent } from './components/partida/partida.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FotoFullComponent } from './components/foto-full/foto-full.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'partidas', component: PartidasComponent },
  { path: 'torneos', component: TorneosComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'album/:id', component: FotoComponent },
  { path: 'foto/:album/:numero', component: FotoFullComponent },
  { path: 'frases', component: FrasesComponent },
  { path: 'dispositivos', component: DispositivosComponent },
  { path: 'partidas-amistosas', component: PartidasAmistosasComponent},
  { path: 'partida-tringov-fischer', component: PartidaTringovFischerComponent },
  { path: 'partida/:id', component: PartidaComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
