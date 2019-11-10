import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PartidasComponent } from './components/partidas/partidas.component';
import { TorneosComponent } from './components/torneos/torneos.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { FrasesComponent } from './components/frases/frases.component';
import { DispositivosComponent } from './components/dispositivos/dispositivos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PartidasAmistosasComponent } from './components/partidas-amistosas/partidas-amistosas.component';
import { PartidaTringovFischerComponent } from './components/partida-tringov-fischer/partida-tringov-fischer.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { PoliticasDePrivacidadComponent } from './components/politicas-de-privacidad/politicas-de-privacidad.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PartidaComponent } from './components/partida/partida.component';

import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ScrollTopComponent } from './components/shared/scroll-top/scroll-top.component';

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
    ContactoComponent,
    BuscarComponent,
    PartidasAmistosasComponent,
    PartidaTringovFischerComponent,
    NoticiasComponent,
    PoliticasDePrivacidadComponent,
    FooterComponent,
    PartidaComponent,
    DomseguroPipe,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
