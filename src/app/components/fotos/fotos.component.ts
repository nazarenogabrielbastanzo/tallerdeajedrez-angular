import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  albumes: any;

  constructor(
    private peticionesServices: PeticionesService,
    private router: Router
  ) {
    this.peticionesServices.getAlbumes()
      .subscribe((data: any) => {
        /* console.log(data); */
        this.albumes = data;
      });
  }

  ngOnInit() {
  }

  verAlbum(numero: number) {
    /* console.log(numero); */
    this.router.navigate(['/album', numero]);
  }

  buscarAlbum( termino: string ) {
    if ( termino.trim().length ) {
      this.router.navigate(['/buscar-album', termino.trim()]);
    }
  }

}
