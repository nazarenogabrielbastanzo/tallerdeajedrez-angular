import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  {
    path: 'partidas',
    component: PartidasComponent,
    data: { animation: 'PartidasPage' },
  },
  {
    path: 'estudios',
    component: EstudiosComponent,
    data: { animation: 'Estudiospage' },
  },
  {
    path: 'fotos',
    component: FotosComponent,
    data: { animation: 'FotosPage' },
  },
  {
    path: 'frases',
    component: FrasesComponent,
    data: { animation: 'FrasesPage' },
  },
  {
    path: 'dispositivos',
    component: DispositivosComponent,
    data: { animation: 'DispositivosPage' },
  },
  {
    path: 'estudio/:nro',
    component: EstudioComponent,
    data: { animation: 'EstudioPage' },
  },
  {
    path: 'partida/:id',
    component: PartidaComponent,
    data: { animation: 'PartidaPage' },
  },
  {
    path: 'album/:id',
    component: FotoComponent,
    data: { animation: 'AlbumPage' },
  },
  {
    path: 'buscar/:termino',
    component: BuscadorComponent,
    data: { animation: 'BuscarPage' },
  },
  {
    path: 'buscar-album/:termino',
    component: BuscarAlbumComponent,
    data: { animation: 'BuscarAlbumPage' },
  },
  { path: 'live', component: LiveComponent, data: { animation: 'LivePage' } },
  { path: '**', redirectTo: 'partidas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
