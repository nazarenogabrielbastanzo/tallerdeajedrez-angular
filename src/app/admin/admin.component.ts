import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public partidas = [];

  public documentId = null;
  public currentStatus = 1; // Inserción
  public newForm = new FormGroup({
    id: new FormControl('', Validators.required),
    blancas: new FormControl('', Validators.required),
    negras: new FormControl('', Validators.required),
    resultado: new FormControl('', Validators.required),
    evento: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required)
  });

  constructor(
    private firestoreService: FirestoreService,
    public auth: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.newForm.setValue({
      id: '',
      blancas: '',
      negras: '',
      resultado: '',
      evento: '',
      fecha: ''
    });
  }

  ngOnInit() {
    this.firestoreService.getAll().subscribe((partidasSnapshot) => {
      this.partidas = [];
      partidasSnapshot.forEach((partidaData: any) => {
        this.partidas.push({
          id: partidaData.payload.doc.id,
          data: partidaData.payload.doc.data()
        });
      });
    });
  }

  public nuevaPartida(form: any, documentId = this.documentId) {
    console.log(`Status: ${this.currentStatus}`);
    if (this.currentStatus === 1) {
      const data = {
        id: form.id,
        blancas: form.blancas,
        negras: form.negras,
        resultado: form.resultado,
        evento: form.evento,
        fecha: form.fecha
      };
      this.firestoreService.crearColeccion(data).then(() => {
        console.log('Documento creado exitósamente!');
        this.openSnackBar();
        this.newForm.setValue({
          id: '',
          blancas: '',
          negras: '',
          resultado: '',
          evento: '',
          fecha: ''
        });
      }, (error) => {
        console.error(error);
      });
    } else {
      const data = {
        id: form.id,
        blancas: form.blancas,
        negras: form.negras,
        resultado: form.resultado,
        evento: form.evento,
        fecha: form.fecha
      };
      this.firestoreService.updateOne(documentId, data).then(() => {
        this.currentStatus = 1;
        this.newForm.setValue({
          id: '',
          blancas: '',
          negras: '',
          resultado: '',
          evento: '',
          fecha: ''
        });
        console.log('Documento editado exitósamente');
      }, (error) => {
        console.log(error);
      });
    }
  }

  public editarPartida(documentId: string) {
    const editSubscribe = this.firestoreService.getOne(documentId)
      .subscribe((partida: any) => {
      this.currentStatus = 2; // Edición
      this.documentId = documentId;
      this.newForm.setValue({
        id: partida.payload.data().id,
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
      this.firestoreService.deleteOne(documentId)
      .then(() => {
        console.log('Documento eliminado!');
      }, (error) => {
        console.error(error);
      });
    }
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 3000,
    });
  }
}
