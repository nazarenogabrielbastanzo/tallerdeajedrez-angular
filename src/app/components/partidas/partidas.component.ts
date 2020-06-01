import { Component, OnInit, ViewEncapsulation, ViewChild, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { FirebaseStorageService } from '../../firebase-storage.service';
import { environment } from 'src/environments/environment';
import { MessagingService } from '../../shared/messaging.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./partidas.component.css']
})
export class PartidasComponent implements OnInit, OnDestroy {

  cargando: boolean;
  partidas: any;
  info: boolean;
  infoMessage: string;
  srcImgPop: string;
  terminoDeBusqueda = '';
  numero: number;
  srcGIF: string;
  gif: boolean;
  jpg: boolean;
  id: string;
  partida: any;
  verCompleta: boolean;
  isAnonymous: boolean;
  uid: string;
  message: any;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private firestoreService: FirestoreService,
    private firebaseStorage: FirebaseStorageService,
    private messagingService: MessagingService,
    private angularFireAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {

    this.angularFireAuth.auth.signInAnonymously()
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });

    this.angularFireAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.isAnonymous = user.isAnonymous;
        this.uid = user.uid;
        // ...
        /* const userId = 'user001'; */
        this.messagingService.requestPermission(this.uid);
        this.messagingService.receiveMessage();
        this.message = this.messagingService.currentMessage;

        this.cargando = true;
        this.firestoreService.getPartidas().subscribe((partidasSnapshot) => {
          this.partidas = [];
          partidasSnapshot.forEach((partidaData: any) => {
              this.partidas.push({
                id: partidaData.payload.doc.id,
                data: partidaData.payload.doc.data()
              });
              this.cargando = false;
          });
          /* this.dtTrigger.next(); */
        });
        this.info = false;
        this.infoMessage = 'Ingrese un texto para buscar...';
      } else {
        // User is signed out.
        // ...
      }
      // ...
    });
  }

  ngOnDestroy(): void { }

  openLg(content: any, numero: number, tipo: string) {
    this.modalService.open(content, { centered: true, backdropClass: 'light-blue-backdrop' });
    this.numero = numero;
    this.setSrcImgPop(numero, tipo);
  }

  openLg2(content: any, id: string, verCompleta: boolean) {
    this.verCompleta = verCompleta;
    this.modalService.open(content, { centered: true, size: 'lg', backdropClass: 'light-blue-backdrop' });
    this.obtenerPartida(id);
  }

  obtenerPartida(id: string) {
    this.firestoreService.getPartida(id)
      .subscribe((partida: any) => {
        this.id = partida.payload.data().partidaId;
        this.numero = partida.payload.data().nro;
      });
  }

  buscarPartida( termino: string ) {
    if ( termino.trim().length ) {
      this.router.navigate(['/buscar', termino.trim()]);
    } else {
      this.info = true;
      setTimeout(() => {
        this.info = false;
      }, 4000);
      this.terminoDeBusqueda = '';
      return;
    }
  }

  setSrcImgPop(numero: number, tipo: string) {
    if (tipo === 'final') {
      this.gif = false;
      this.jpg = true;
      const nombreArchivo = `gs://${environment.firebase.storageBucket}/${numero}.jpg`;
      const referencia = this.firebaseStorage.referenciaCloudStorage(nombreArchivo);
      referencia.getDownloadURL().then((URL) => {
        this.srcImgPop = URL;
        /* console.log(URL); */
      });
    } else {
      this.jpg = false;
      this.gif = true;
      const nombreArchivo = `gs://${environment.firebase.storageBucket}/${numero}.gif`;
      const referencia = this.firebaseStorage.referenciaCloudStorage(nombreArchivo);
      referencia.getDownloadURL().then((URL) => {
        this.srcGIF = URL;
        /* console.log(URL); */
      });
    }
  }

}
