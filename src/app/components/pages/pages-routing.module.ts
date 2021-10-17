import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtaquesDirectosAlReyComponent } from '../articles/ataques-directos-al-rey/ataques-directos-al-rey.component';
import { PartidaTringovFischerComponent } from '../articles/partida-tringov-fischer/partida-tringov-fischer.component';
import { PartidasAmistosasComponent } from '../articles/partidas-amistosas/partidas-amistosas.component';
import { BuscadorComponent } from './components/seekers/buscador/buscador.component';
import { BuscarAlbumComponent } from './components/seekers/buscar-album/buscar-album.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { EstudioComponent } from './estudio/estudio.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { FotoComponent } from './foto/foto.component';
import { FotosComponent } from './fotos/fotos.component';
import { FrasesComponent } from './frases/frases.component';
import { LiveComponent } from './live/live.component';
import { PartidaComponent } from './partida/partida.component';
import { PartidasComponent } from './partidas/partidas.component';

const routes: Routes = [
  { path: 'partidas', component: PartidasComponent },
  { path: 'estudios', component: EstudiosComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'frases', component: FrasesComponent },
  { path: 'dispositivos', component: DispositivosComponent },
  { path: 'estudio/:nro', component: EstudioComponent },
  { path: 'partida/:id', component: PartidaComponent },
  { path: 'album/:id', component: FotoComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'buscar-album/:termino', component: BuscarAlbumComponent },
  { path: 'live', component: LiveComponent },
  { path: '**', redirectTo: 'partidas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
