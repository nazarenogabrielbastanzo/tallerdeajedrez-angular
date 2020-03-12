import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  // Crea
  public crearColeccion(data: any) {
    return this.firestore.collection('mi_coleccion').add(data);
  }
  // Obtiene
  public getOne(documentId: string) {
    return this.firestore.collection('mi_coleccion').doc(documentId).snapshotChanges();
  }
  // Obtiene todos
  public getAll() {
    return this.firestore.collection('mi_coleccion').snapshotChanges();
  }
  // Actualiza uno
  public updateOne(documentId: string, data: any) {
    return this.firestore.collection('mi_coleccion').doc(documentId).set(data);
  }
  // Elimina uno
  public deleteOne( documentId: string ) {
    return this.firestore.collection('mi_coleccion').doc(documentId).delete();
  }
}
