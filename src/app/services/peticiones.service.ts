import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  url = 'assets/datos/partidas.json';

  constructor(
    private httpClient: HttpClient
  ) { }

  getPartidas() {
    return this.httpClient.get(this.url);
  }
}
