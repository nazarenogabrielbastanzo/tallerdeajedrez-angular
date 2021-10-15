import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgMaterialModule } from './modules/ng-material/ng-material.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthModule } from '@auth0/auth0-angular';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { FooterComponent } from './components/shared/footer/footer.component';

// import { OrderbyPipe } from './pipes/orderby.pipe';
// import { DomseguroPipe } from './pipes/domseguro.pipe';

import { MessagingService } from './services/messaging.service';
import { ScrollTopComponent } from './components/shared/scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    // OrderbyPipe,
    // DomseguroPipe,
    AppComponent,
    SidenavComponent,
    HomeComponent,
    FooterComponent,
    ScrollTopComponent,
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
    // NgbModule,
    // NgbPaginationModule,
    // NgbAlertModule,
  ],
  exports: [
    // OrderbyPipe,
    // DomseguroPipe,
  ],
  providers: [
    AngularFirestore,
    AngularFireAuth,
    MessagingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
