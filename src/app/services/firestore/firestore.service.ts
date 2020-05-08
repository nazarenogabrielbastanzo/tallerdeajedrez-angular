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
  public crearPartida(data: any) {
    return this.firestore.collection('partidas').add(data);
  }
  // Obtiene
  public getPartida(documentId: string) {
    return this.firestore.collection('partidas').doc(documentId).snapshotChanges();
  }
  // Obtiene todos
  public getPartidas() {
    return this.firestore.collection('partidas').snapshotChanges();
  }
  // Actualiza uno
  public updatePartida(documentId: string, data: any) {
    return this.firestore.collection('partidas').doc(documentId).set(data);
  }
  // Elimina uno
  public deletePartida( documentId: string ) {
    return this.firestore.collection('partidas').doc(documentId).delete();
  }
}
