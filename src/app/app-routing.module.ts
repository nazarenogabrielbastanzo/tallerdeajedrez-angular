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
import { BuscarAlbumComponent } from './components/buscar-album/buscar-album.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { EstudioComponent } from './components/estudio/estudio.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'partidas', component: PartidasComponent },
  { path: 'torneos', component: TorneosComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'album/:id', component: FotoComponent },
  { path: 'foto/:album/:numero', component: FotoFullComponent },
  { path: 'buscar-album/:termino', component: BuscarAlbumComponent },
  { path: 'frases', component: FrasesComponent },
  { path: 'dispositivos', component: DispositivosComponent },
  { path: 'partidas-amistosas', component: PartidasAmistosasComponent},
  { path: 'partida-tringov-fischer', component: PartidaTringovFischerComponent },
  { path: 'estudios', component: EstudiosComponent },
  { path: 'estudio/:nro', component: EstudioComponent },
  { path: 'partida/:id', component: PartidaComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'perfil', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'login', component: AuthComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
