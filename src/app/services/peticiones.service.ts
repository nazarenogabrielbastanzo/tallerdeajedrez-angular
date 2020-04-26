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
  albumes: any;

  constructor(
    private httpClient: HttpClient
  ) {
    this.getPartidas().subscribe((data: any) => {
      this.partidas = data;
    });
    this.getAlbumes().subscribe((data: any) => {
      this.albumes = data;
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
        const negras = partida.negras.toLowerCase();
        const resultado = partida.resultado;
        const evento = partida.evento.toLowerCase();
        const fecha = partida.fecha;
        /* const numero = partida.numero.toString(); */
        if (
          blancas.indexOf( termino ) >= 0 ||
          negras.indexOf( termino ) >= 0 ||
          resultado.indexOf( termino ) >= 0 ||
          evento.indexOf( termino ) >= 0 ||
          fecha.indexOf( termino ) >= 0 /* ||
          numero.indexOf( termino ) >= 0 */
        ) { // lo encontro
            partidasArr.push( partida );
        }
    }
    return partidasArr;
  }

  buscarAlbumes( termino: string ): any[] {
    const albumArr: any[] = [];
    termino = termino.toLowerCase();
    for (const albumFotos of this.albumes) {
        const albumId = albumFotos.album_id.toString();
        const album = albumFotos.album.toLowerCase();
        const lugar = albumFotos.lugar.toLowerCase();
        const fecha = albumFotos.fecha;
        const cantidadFotos = albumFotos.cantidadFotos.toString();
        if (
          albumId.indexOf( termino ) >= 0 ||
          album.indexOf( termino ) >= 0 ||
          lugar.indexOf( termino ) >= 0 ||
          fecha.indexOf( termino ) >= 0 ||
          cantidadFotos.indexOf( termino ) >= 0
        ) { // lo encontro
            albumArr.push( albumFotos );
        }
    }
    return albumArr;
  }
}
