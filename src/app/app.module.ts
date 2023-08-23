import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgMaterialModule } from './modules/ng-material/ng-material.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { MessagingService } from './services/messaging.service';

import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    SharedModule
  ],
  providers: [
    AngularFirestore,
    AngularFireAuth,
    MessagingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
