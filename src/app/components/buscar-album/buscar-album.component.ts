import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-buscar-album',
  templateUrl: './buscar-album.component.html',
  styleUrls: ['./buscar-album.component.css']
})
export class BuscarAlbumComponent implements OnInit {

  albumes: any[] = []; // es arreglo porque pueden ser varias las coincidencias que aparezcan
  termino: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peticionesService: PeticionesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      /* console.log( params.termino ); */
      /* o bien: *//* console.log( params['termino'] ); */
      this.termino = params.termino;
      this.albumes = this.peticionesService.buscarAlbumes( params.termino );
      /* console.log(this.partidas); */
    });
  }

  verAlbum( numero: number ) {
    this.router.navigate(['/album', numero]);
  }

}
