import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  urlPartidas = 'assets/datos/partidas.json';
  urlAlbumes = 'assets/datos/albumes.json';

  constructor(
    private httpClient: HttpClient
  ) { }

  getPartidas() {
    return this.httpClient.get(this.urlPartidas);
  }

  getAlbumes() {
    return this.httpClient.get(this.urlAlbumes);
  }
}
