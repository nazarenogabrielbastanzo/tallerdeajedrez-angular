import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PartidasComponent } from './components/partidas/partidas.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { FrasesComponent } from './components/frases/frases.component';
import { DispositivosComponent } from './components/dispositivos/dispositivos.component';
import { PartidasAmistosasComponent } from './components/articles/partidas-amistosas/partidas-amistosas.component';
import { PartidaTringovFischerComponent } from './components/articles/partida-tringov-fischer/partida-tringov-fischer.component';
import { EstudioComponent } from './components/estudio/estudio.component';
import { PartidaComponent } from './components/partida/partida.component';
import { FotoComponent } from './components/foto/foto.component';
import { BuscadorComponent } from './components/seekers/buscador/buscador.component';
import { BuscarAlbumComponent } from './components/seekers/buscar-album/buscar-album.component';
import { AtaquesDirectosAlReyComponent } from './components/articles/ataques-directos-al-rey/ataques-directos-al-rey.component';
import { LiveComponent } from './components/live/live.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'partidas', component: PartidasComponent },
  { path: 'estudios', component: EstudiosComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'frases', component: FrasesComponent },
  { path: 'dispositivos', component: DispositivosComponent },
  { path: 'partidas-amistosas', component: PartidasAmistosasComponent },
  { path: 'partida-tringov-fischer', component: PartidaTringovFischerComponent },
  { path: 'estudio/:nro', component: EstudioComponent },
  { path: 'partida/:id', component: PartidaComponent },
  { path: 'album/:id', component: FotoComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'buscar-album/:termino', component: BuscarAlbumComponent },
  { path: 'ataques-directos-al-rey', component: AtaquesDirectosAlReyComponent },
  { path: 'live', component: LiveComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
