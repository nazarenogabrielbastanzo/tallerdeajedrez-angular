import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
/* import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component'; */

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
    partidaId: new FormControl('', Validators.required),
    blancas: new FormControl('', Validators.required),
    negras: new FormControl('', Validators.required),
    resultado: new FormControl('', Validators.required),
    evento: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required)
  });

  constructor(
    private firestoreService: FirestoreService,
    public auth: AuthService,
    /* private snackBar: MatSnackBar */
  ) {
    this.newForm.setValue({
      partidaId: '',
      blancas: '',
      negras: '',
      resultado: '',
      evento: '',
      fecha: ''
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
        partidaId: form.partidaId,
        blancas: form.blancas,
        negras: form.negras,
        resultado: form.resultado,
        evento: form.evento,
        fecha: form.fecha
      };
      this.firestoreService.crearPartida(data).then(() => {
        console.log('Documento creado exitósamente!');
        /* this.openSnackBar(); */
        this.newForm.setValue({
          partidaId: '',
          blancas: '',
          negras: '',
          resultado: '',
          evento: '',
          fecha: ''
        });
        window.scroll(0, 0);
      }, (error) => {
        console.error(error);
      });
    } else {
      const data = {
        partidaId: form.partidaId,
        blancas: form.blancas,
        negras: form.negras,
        resultado: form.resultado,
        evento: form.evento,
        fecha: form.fecha
      };
      this.firestoreService.updatePartida(documentId, data).then(() => {
        this.currentStatus = 1;
        this.newForm.setValue({
          partidaId: '',
          blancas: '',
          negras: '',
          resultado: '',
          evento: '',
          fecha: ''
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
        partidaId: partida.payload.data().partidaId,
        blancas: partida.payload.data().blancas,
        negras: partida.payload.data().negras,
        resultado: partida.payload.data().resultado,
        evento: partida.payload.data().evento,
        fecha: partida.payload.data().fecha
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
}
