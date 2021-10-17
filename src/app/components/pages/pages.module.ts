import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { EstudioComponent } from './estudio/estudio.component';
import { FotosComponent } from './fotos/fotos.component';
import { FotoComponent } from './foto/foto.component';
import { FrasesComponent } from './frases/frases.component';
import { LiveComponent } from './live/live.component';
import { PartidasComponent } from './partidas/partidas.component';
import { PartidaComponent } from './partida/partida.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMaterialModule } from 'src/app/modules/ng-material/ng-material.module';
import { FormsModule } from '@angular/forms';
import { BuscadorComponent } from './components/seekers/buscador/buscador.component';
import { BuscarAlbumComponent } from './components/seekers/buscar-album/buscar-album.component';
import { LoadingComponent } from '../shared/loading/loading.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    DispositivosComponent,
    EstudiosComponent,
    EstudioComponent,
    FotosComponent,
    FotoComponent,
    FrasesComponent,
    LiveComponent,
    PartidasComponent,
    PartidaComponent,
    BuscadorComponent,
    BuscarAlbumComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgMaterialModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    PipesModule
  ]
})
export class PagesModule { }
