import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MiModuloModule } from './mi-modulo.module';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PartidasComponent } from './components/partidas/partidas.component';
import { TorneosComponent } from './components/torneos/torneos.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { FrasesComponent } from './components/frases/frases.component';
import { DispositivosComponent } from './components/dispositivos/dispositivos.component';
import { PartidasAmistosasComponent } from './components/partidas-amistosas/partidas-amistosas.component';
import { PartidaTringovFischerComponent } from './components/partida-tringov-fischer/partida-tringov-fischer.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PartidaComponent } from './components/partida/partida.component';

/* import { SnackBarComponent } from './snack-bar/snack-bar.component'; */

import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ScrollTopComponent } from './components/shared/scroll-top/scroll-top.component';
import { FotoComponent } from './components/foto/foto.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FotoFullComponent } from './components/foto-full/foto-full.component';
import { EstudioDavidGurgenidzeComponent } from './components/estudio-david-gurgenidze/estudio-david-gurgenidze.component';
import { BuscarAlbumComponent } from './components/buscar-album/buscar-album.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PartidasComponent,
    TorneosComponent,
    FotosComponent,
    FrasesComponent,
    DispositivosComponent,
    PartidasAmistosasComponent,
    PartidaTringovFischerComponent,
    FooterComponent,
    PartidaComponent,
    DomseguroPipe,
    ScrollTopComponent,
    FotoComponent,
    BuscadorComponent,
    FotoFullComponent,
    EstudioDavidGurgenidzeComponent,
    BuscarAlbumComponent,
    ProfileComponent,
    AdminComponent,
    /* SnackBarComponent */
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MiModuloModule
  ],
  providers: [
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
