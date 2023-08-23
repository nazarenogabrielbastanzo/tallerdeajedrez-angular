import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionesService } from '../../../../../services/peticiones.service';
// import { FirestoreService } from '../../../services/firestore.service';
import { AngularFireAuth } from '@angular/fire/auth';
// import { FirebaseStorageService } from '../../../services/firebase-storage.service';
// import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  partidas: any[] = [];
  termino: string = '';
  srcImgPop: string = '';
  jpg: boolean = false;
  gif: boolean = false;
  srcGIF: string = '';
  numero: number = 0;
  verCompleta: boolean = false;
  id: string = '';
  isAnonymous: boolean = false;
  uid: string = '';

  constructor(
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private peticionesService: PeticionesService,
    private router: Router,
    // private firestoreService: FirestoreService,
    private angularFireAuth: AngularFireAuth,
    // private firebaseStorage: FirebaseStorageService
  ) { }

  ngOnInit(): void {
    this.angularFireAuth.signInAnonymously()
      .catch((error: any) => {
        console.log(error.code);
        console.log(error.message);
      });

    this.angularFireAuth.onAuthStateChanged((user: any) => {
      if (user) {
        // User is signed in.
        this.isAnonymous = user.isAnonymous;
        this.uid = user.uid;
        // ...
        this.activatedRoute.params.subscribe((params: any) => {
          this.termino = params.termino;
          this.partidas = this.peticionesService.buscarPartidas(params.termino);
        });
      } else {
        // User is signed out.
        // ...
      }
    });
  }

  openLg(content: any, numero: number, tipo: string) {
    /* this.modalService.open(content, { size: 'lg' }); */
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

  verPartida(numero: any) {
    this.router.navigate(['pages/partida', +numero]);
  }

  goBack() {
    this.router.navigate(['pages/partidas']);
  }

  setSrcImgPop(numero: any, tipo: string) {
    numero = +numero;
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
      /* this.srcImgPop = `assets/images/nuevas/tooltips/${ numero }.jpg`; */
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
      /* this.srcGIF = `assets/images/nuevas/gifs/${ numero }.gif`; */
      // const nombreArchivo = `gs://${environment.firebaseConfig.storageBucket}/${numero}.gif`;
      // const referencia = this.firebaseStorage.referenciaCloudStorage(nombreArchivo);
      // referencia.getDownloadURL().then((URL) => {
      //   this.srcGIF = URL;
      //   /* console.log(URL); */
      // });
      this.srcGIF = `assets/images/nuevas/gifs/${numero}.gif`;
    }
  }

}
