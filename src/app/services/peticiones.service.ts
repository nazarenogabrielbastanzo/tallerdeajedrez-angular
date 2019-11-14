import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  urlPartidas = 'assets/datos/partidas.json';
  urlAlbumes = 'assets/datos/albumes.json';
  urlFrases = 'assets/datos/frases.json';
  partidas: any;

  constructor(
    private httpClient: HttpClient
  ) {
    this.getPartidas().subscribe((data: any) => {
      this.partidas = data;
    });
  }

  getPartidas() {
    return this.httpClient.get(this.urlPartidas);
  }

  getAlbumes() {
    return this.httpClient.get(this.urlAlbumes);
  }

  getFrases() {
    return this.httpClient.get(this.urlFrases);
  }

  buscarPartidas( termino: string ): any[] {
    const partidasArr: any[] = [];
    termino = termino.toLowerCase();
    for (const partida of this.partidas) {
        const blancas = partida.blancas.toLowerCase();
        if ( blancas.indexOf( termino ) >= 0 ) { // lo encontro
            partidasArr.push( partida );
        }
    }
    return partidasArr;
  }
}
