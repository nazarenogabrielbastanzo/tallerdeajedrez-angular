import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private ngFirestore: AngularFirestore
  ) { }

  // Crea
  public crearPartida(data: any) {
    return this.ngFirestore.collection('partidas').add(data);
  }
  // Obtiene
  public getPartida(documentId: string) {
    return this.ngFirestore.collection('partidas').doc(documentId).snapshotChanges();
  }
  // Obtiene todos
  public getPartidas() {
    return this.ngFirestore.collection('partidas').snapshotChanges();
  }
  // Actualiza uno
  public updatePartida(documentId: string, data: any) {
    return this.ngFirestore.collection('partidas').doc(documentId).set(data);
  }
  // Elimina uno
  public deletePartida(documentId: string) {
    return this.ngFirestore.collection('partidas').doc(documentId).delete();
  }
}
