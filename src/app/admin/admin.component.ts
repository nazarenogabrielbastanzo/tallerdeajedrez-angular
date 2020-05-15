import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
/* import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component'; */
import { FirebaseStorageService } from '../firebase-storage.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public partidas = [];
  public cargando = true;
  public documentId = null;
  public currentStatus = 1; // Inserción
  public newForm = new FormGroup({
    nro: new FormControl('', Validators.required),
    partidaId: new FormControl('', Validators.required),
    blancas: new FormControl('', Validators.required),
    negras: new FormControl('', Validators.required),
    resultado: new FormControl('', Validators.required),
    evento: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    archivo: new FormControl(null, Validators.required),
    archivo1: new FormControl(null, Validators.required)
  });

  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();

  public nombreArchivo = '';
  public nombreArchivo1 = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;
  public finalizado1 = false;
  public mensajeArchivo1 = 'No hay un archivo seleccionado';

  constructor(
    private firestoreService: FirestoreService,
    public auth: AuthService,
    /* private snackBar: MatSnackBar */
    private firebaseStorage: FirebaseStorageService
  ) {
    this.newForm.setValue({
      nro: '',
      partidaId: '',
      blancas: '',
      negras: '',
      resultado: '',
      evento: '',
      fecha: '',
      archivo: '',
      archivo1: ''
    });
  }

  ngOnInit() {
    this.firestoreService.getPartidas().subscribe((partidasSnapshot) => {
      this.partidas = [];
      partidasSnapshot.forEach((partidaData: any) => {
        this.partidas.push({
          id: partidaData.payload.doc.id,
          data: partidaData.payload.doc.data()
        });
        this.cargando = false;
      });
    });
  }

  public nuevaPartida(form: any, documentId = this.documentId) {
    console.log(`Status: ${this.currentStatus}`);
    if (this.currentStatus === 1) {
      const data = {
        nro: form.nro,
        partidaId: form.partidaId,
        blancas: form.blancas,
        negras: form.negras,
        resultado: form.resultado,
        evento: form.evento,
        fecha: form.fecha,
        archivo: form.archivo,
        archivo1: form.archivo
      };
      this.firestoreService.crearPartida(data).then(() => {
        console.log('Documento creado exitósamente!');
        this.subirArchivo();
        this.subirArchivo1();
        /* this.openSnackBar(); */
        this.newForm.setValue({
          nro: '',
          partidaId: '',
          blancas: '',
          negras: '',
          resultado: '',
          evento: '',
          fecha: '',
          archivo: '',
          archivo1: ''
        });
        window.scroll(0, 0);
      }, (error) => {
        console.error(error);
      });
    } else {
      const data = {
        nro: form.nro,
        partidaId: form.partidaId,
        blancas: form.blancas,
        negras: form.negras,
        resultado: form.resultado,
        evento: form.evento,
        fecha: form.fecha,
        archivo: form.archivo,
        archivo1: form.archivo
      };
      this.firestoreService.updatePartida(documentId, data).then(() => {
        this.currentStatus = 1;
        this.subirArchivo();
        this.subirArchivo1();
        this.newForm.setValue({
          nro: '',
          partidaId: '',
          blancas: '',
          negras: '',
          resultado: '',
          evento: '',
          fecha: '',
          archivo: '',
          archivo1: ''
        });
        console.log('Documento editado exitósamente');
        window.scroll(0, 0);
      }, (error) => {
        console.log(error);
      });
    }
  }

  public editarPartida(documentId: string) {
    const editSubscribe = this.firestoreService.getPartida(documentId)
      .subscribe((partida: any) => {
      this.currentStatus = 2; // Edición
      this.documentId = documentId;
      this.newForm.setValue({
        nro: partida.payload.data().nro,
        partidaId: partida.payload.data().partidaId,
        blancas: partida.payload.data().blancas,
        negras: partida.payload.data().negras,
        resultado: partida.payload.data().resultado,
        evento: partida.payload.data().evento,
        fecha: partida.payload.data().fecha,
        archivo: partida.payload.data().archivo,
        archivo1: partida.payload.data().archivo
      });
      editSubscribe.unsubscribe();
    });
  }

  public eliminarPartida(documentId: string) {
    if ( !confirm('¿Seguro de eliminar la partida?') ) {
      return;
    } else {
      this.firestoreService.deletePartida(documentId)
      .then(() => {
        console.log('Documento eliminado!');
      }, (error) => {
        console.error(error);
      });
    }
  }
/*
  openSnackBar() {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 3000,
    });
  } */

  // 12052020_1:

  // Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivo(event) {
    if (event.target.files.length > 0) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo = `Archivo preparado: ${event.target.files[i].name}`;
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name);
      }
    } else {
      this.mensajeArchivo = 'No hay un archivo seleccionado';
    }
  }

  // Sube el archivo a Cloud Storage
  public subirArchivo() {
    const archivo = this.datosFormulario.get('archivo');
    const nombreArchivo = `gs://${environment.firebase.storageBucket}/${this.nombreArchivo}`;
    /* const referencia = this.firebaseStorage.referenciaCloudStorage(nombreArchivo); */
    const tarea = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, archivo);

    // Cambia el porcentaje
    tarea.percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje);
      if (this.porcentaje === 100) {
        this.finalizado = true;
      }
    });

    /* referencia.getDownloadURL().then((URL) => {
      this.URLPublica = URL;
      console.log(URL);
    }); */
  }

  // Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivo1(event) {
    if (event.target.files.length > 0) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo1 = `Archivo preparado: ${event.target.files[i].name}`;
        this.nombreArchivo1 = event.target.files[i].name;
        this.datosFormulario.delete('archivo1');
        this.datosFormulario.append('archivo1', event.target.files[i], event.target.files[i].name);
      }
    } else {
      this.mensajeArchivo1 = 'No hay un archivo seleccionado';
    }
  }

  // Sube el archivo a Cloud Storage
  public subirArchivo1() {
    const archivo = this.datosFormulario.get('archivo1');
    const nombreArchivo1 = `gs://${environment.firebase.storageBucket}/${this.nombreArchivo1}`;
    /* const referencia = this.firebaseStorage.referenciaCloudStorage(nombreArchivo1); */
    const tarea = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo1, archivo);

    // Cambia el porcentaje
    tarea.percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje);
      if (this.porcentaje === 100) {
        this.finalizado1 = true;
      }
    });

    /* referencia.getDownloadURL().then((URL) => {
      this.URLPublica = URL;
      console.log(URL);
    }); */
  }
}
