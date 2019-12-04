import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // No es necesario importarlo en el modulo principal
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyA0Ratgkb6-SARszea-lzHniNTRvxKK5Tg';

  userToken: string;
  // Crear nuevo usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(
    private http: HttpClient
  ) {
    this.leerToken();
  }

  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  login(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(
      `${ this.url }signInWithPassword?key=${ this.apikey }`,
      authData // lo que voy a enviar al servidor
    ).pipe(
      map( (resp: any) => {
        /* console.log('Entro en el map del rxjs') */
        this.guardarToken( resp.idToken );
        return resp;
      })
    );
  }

  nuevoUsuario(usuario: UsuarioModel) {
    // ver https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
    const authData = {
      ...usuario, // Añade todo lo de usuario
      /* nombre: usuario.nombre, // firebase no lo toma, pero no pasa nada
      email: usuario.email,
      password: usuario.password */
      returnSecureToken: true
    };
    return this.http.post(
      `${ this.url }signUp?key=${ this.apikey }`,
      authData // lo que voy a enviar al servidor
    ).pipe(
      map( (resp: any) => {
        /* console.log('Entro en el map del rxjs') */
        this.guardarToken( resp.idToken );
        return resp;
      })
    );
  }

  private guardarToken( idTocken: string ) {
    this.userToken = idTocken;
    localStorage.setItem('token', idTocken);

    const hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem( 'expira', hoy.getTime().toString() );
  }

  leerToken() {
    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAutenticado(): boolean {

    if ( this.userToken.length < 2 ) { // si no existe
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new  Date();
    expiraDate.setTime(expira);

    if ( expiraDate > new Date() ) {
      return true;
    } else {
      return false;
    }
  }
}
