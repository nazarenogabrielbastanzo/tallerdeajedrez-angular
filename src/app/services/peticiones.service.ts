import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  public urlPosts = 'assets/datos/posts.json';
  public urlEstudios = 'assets/datos/estudios.json';
  public urlFrases = 'assets/datos/frases.json';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getPosts() {
    return this.httpClient.get(this.urlPosts);
  }

  public getEstudios() {
    return this.httpClient.get(this.urlEstudios);
  }

  public getFrases() {
    return this.httpClient.get(this.urlFrases);
  }

}
