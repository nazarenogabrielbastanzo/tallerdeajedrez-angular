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
import { EstudioDavidGurgenidzeComponent } from './components/estudio-david-gurgenidze/estudio-david-gurgenidze.component';
import { BuscarAlbumComponent } from './components/buscar-album/buscar-album.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';

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
  { path: 'estudio-david-gurgenidze/1', component: EstudioDavidGurgenidzeComponent },
  { path: 'partida/:id', component: PartidaComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'ingresar', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'perfil', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
