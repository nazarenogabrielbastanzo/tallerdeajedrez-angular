import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgMaterialModule } from './modules/ng-material/ng-material.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthModule } from '@auth0/auth0-angular';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PartidasComponent } from './components/partidas/partidas.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { FrasesComponent } from './components/frases/frases.component';

import { DomseguroPipe } from './pipes/domseguro.pipe';
import { OrderbyPipe } from './pipes/orderby.pipe';

import { MessagingService } from './services/messaging.service';
import { DispositivosComponent } from './components/dispositivos/dispositivos.component';
import { ScrollTopComponent } from './components/shared/scroll-top/scroll-top.component';
import { PartidasAmistosasComponent } from './components/articles/partidas-amistosas/partidas-amistosas.component';
import { PartidaTringovFischerComponent } from './components/articles/partida-tringov-fischer/partida-tringov-fischer.component';
import { EstudioComponent } from './components/estudio/estudio.component';
import { PartidaComponent } from './components/partida/partida.component';
import { FotoComponent } from './components/foto/foto.component';
import { BuscadorComponent } from './components/seekers/buscador/buscador.component';
import { BuscarAlbumComponent } from './components/seekers/buscar-album/buscar-album.component';
import { AtaquesDirectosAlReyComponent } from './components/articles/ataques-directos-al-rey/ataques-directos-al-rey.component';
import { LiveComponent } from './components/live/live.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    FooterComponent,
    PartidasComponent,
    EstudiosComponent,
    FotosComponent,
    FrasesComponent,
    DomseguroPipe,
    OrderbyPipe,
    DispositivosComponent,
    ScrollTopComponent,
    PartidasAmistosasComponent,
    PartidaTringovFischerComponent,
    EstudioComponent,
    PartidaComponent,
    FotoComponent,
    BuscadorComponent,
    BuscarAlbumComponent,
    AtaquesDirectosAlReyComponent,
    LiveComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: environment.auth0Config.domain,
      clientId: environment.auth0Config.clientId
    }),
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule
  ],
  providers: [
    AngularFirestore,
    AngularFireAuth,
    MessagingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
