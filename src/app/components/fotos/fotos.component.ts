import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  cargando: boolean;
  albumes: any;
  info: boolean;
  infoMessage: string;
  terminoDeBusqueda = '';
  maxlength = 50;

  constructor(
    private peticionesServices: PeticionesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargando = true;
    this.peticionesServices.getAlbumes()
      .subscribe((data: any) => {
        this.cargando = false;
        this.albumes = data.reverse();
      });
    this.info = false;
    this.infoMessage = 'Ingrese un texto para buscar . . .';
  }

  verAlbum(numero: number) {
    this.router.navigate(['/album', numero]);
  }

  buscarAlbum( termino: string ) {
    if ( termino.trim().length ) {
      this.router.navigate(['/buscar-album', termino.trim()]);
    } else {
      this.info = true;
      setTimeout(() => {
        this.info = false;
      }, 4000);
      this.terminoDeBusqueda = '';
      return;
    }
  }

}
