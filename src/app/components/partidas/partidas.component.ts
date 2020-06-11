import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { FirebaseStorageService } from '../../firebase-storage.service';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./partidas.component.css']
})
export class PartidasComponent implements OnInit {

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
  maxlength = 50;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private firestoreService: FirestoreService,
    private firebaseStorage: FirebaseStorageService,
    private angularFireAuth: AngularFireAuth
  ) { }

  @HostListener('window:keyup.esc', ['$event']) onMouseEnter(event: KeyboardEvent) {
    this.modalService.dismissAll();
  }

  ngOnInit(): void {

    this.angularFireAuth.auth.signInAnonymously()
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });

    this.angularFireAuth.auth.onAuthStateChanged((user) => {
      if (user) {

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

  cerrarModal1() {
    this.modalService.dismissAll();
    this.srcImgPop = '';
    this.srcGIF = '';
  }

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
