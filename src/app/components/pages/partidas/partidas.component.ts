import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
// import { FirebaseStorageService } from '../../services/firebase-storage.service';
// import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
// import { FirestoreService } from '../../services/firestore.service';
import { PeticionesService } from '../../../services/peticiones.service';
import { Partida } from '../partida.interface';

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./partidas.component.css']
})
export class PartidasComponent implements OnInit {

  cargando: boolean = true;
  partidas: Partida[] = [];
  info: boolean = false;
  infoMessage: string = '';
  srcImgPop: string = '';
  terminoDeBusqueda = '';
  numero: any;
  srcGIF: string = '';
  gif: boolean = false;
  jpg: boolean = false;
  id: string = '';
  partida: any;
  verCompleta: boolean = false;
  isAnonymous: boolean = false;
  uid: string = '';
  message: any;
  maxlength = 50;
  pagina = 1;
  rango = 10;
  showLoading: boolean = true;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    // private firestoreService: FirestoreService,
    // private firebaseStorage: FirebaseStorageService,
    private angularFireAuth: AngularFireAuth,
    private peticionesService: PeticionesService
  ) { }

  @HostListener('window:keyup.esc', ['$event']) onMouseEnter(event: KeyboardEvent) {
    this.modalService.dismissAll();
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.showLoading = false;
    }, 2000);

    this.angularFireAuth.signInAnonymously()
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });

    this.angularFireAuth.onAuthStateChanged((user) => {
      if (user) {

        this.cargando = true;
        // this.firestoreService.getPartidas().subscribe((partidasSnapshot) => {
        //   this.partidas = [];
        //   partidasSnapshot.forEach((partidaData: any) => {
        //       this.partidas.push({
        //         id: partidaData.payload.doc.id,
        //         data: partidaData.payload.doc.data()
        //       });
        //       this.cargando = false;
        //   });
        //   /* this.dtTrigger.next(); */
        //   console.log(this.partidas);

        // });

        this.peticionesService.getPartidas()
          .subscribe((data: any) => {
            // console.log(data);
            this.partidas = data;
            this.cargando = false;
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

  openLg(content: any, numero: string, tipo: string) {
    this.modalService.open(content, { centered: true, backdropClass: 'light-blue-backdrop' });
    this.numero = numero;
    this.setSrcImgPop(numero, tipo);
  }

  // openLg2(content: any, id: string, verCompleta: boolean) {
  //   this.verCompleta = verCompleta;
  //   this.modalService.open(content, { centered: true, size: 'lg', backdropClass: 'light-blue-backdrop' });
  //   this.obtenerPartida(id);
  // }

  // obtenerPartida(id: string) {
  //   this.firestoreService.getPartida(id)
  //     .subscribe((partida: any) => {
  //       this.id = partida.payload.data().partidaId;
  //       this.numero = partida.payload.data().nro;
  //     });
  // }

  buscarPartida(termino: string) {
    if (termino.trim().length) {
      this.router.navigate(['pages/buscar', termino.trim()]);
    } else {
      this.info = true;
      setTimeout(() => {
        this.info = false;
      }, 4000);
      this.terminoDeBusqueda = '';
      return;
    }
  }

  setSrcImgPop(numero: any, tipo: string) {
    if (numero < 10) {
      numero = `000${numero}`;
    } else if (numero < 100) {
      numero = `00${numero}`;
    } else {
      numero = `0${numero}`;
    }
    if (tipo === 'final') {
      this.gif = false;
      this.jpg = true;
      // const nombreArchivo = `gs://${environment.firebaseConfig.storageBucket}/${numero}.jpg`;
      // const referencia = this.firebaseStorage.referenciaCloudStorage(nombreArchivo);
      // referencia.getDownloadURL().then((URL) => {
      //   this.srcImgPop = URL;
      //   /* console.log(URL); */
      // });
      this.srcImgPop = `assets/images/nuevas/tooltips/${numero}.jpg`;
    } else {
      this.jpg = false;
      this.gif = true;
      // const nombreArchivo = `gs://${environment.firebaseConfig.storageBucket}/${numero}.gif`;
      // const referencia = this.firebaseStorage.referenciaCloudStorage(nombreArchivo);
      // referencia.getDownloadURL().then((URL) => {
      //   this.srcGIF = URL;
      //   /* console.log(URL); */
      // });
      this.srcGIF = `assets/images/nuevas/gifs/${numero}.gif`;
    }
  }

  openTheGame(numero: any) {
    numero = +(numero);
    this.router.navigate(['pages/partida', numero]);
  }

}
