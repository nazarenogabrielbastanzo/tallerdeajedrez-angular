import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PartidasComponent } from './components/partidas/partidas.component';
import { TorneosComponent } from './components/torneos/torneos.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { FrasesComponent } from './components/frases/frases.component';
import { DispositivosComponent } from './components/dispositivos/dispositivos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PartidasAmistosasComponent } from './components/partidas-amistosas/partidas-amistosas.component';
import { PartidaTringovFischerComponent } from './components/partida-tringov-fischer/partida-tringov-fischer.component';
import { PartidaComponent } from './components/partida/partida.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'partidas', component: PartidasComponent },
  { path: 'torneos', component: TorneosComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'frases', component: FrasesComponent },
  { path: 'dispositivos', component: DispositivosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'partidas-amistosas', component: PartidasAmistosasComponent},
  { path: 'partida-tringov-fischer', component: PartidaTringovFischerComponent },
  { path: 'partida/:id', component: PartidaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
