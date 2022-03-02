import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionesService } from '../../../../../services/peticiones.service';

@Component({
  selector: 'app-buscar-album',
  templateUrl: './buscar-album.component.html',
  styleUrls: ['./buscar-album.component.css']
})
export class BuscarAlbumComponent implements OnInit {

  albumes: any[] = [];
  termino: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private peticionesService: PeticionesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.termino = params.termino;
      this.albumes = this.peticionesService.buscarAlbumes( params.termino );
    });
  }

  verAlbum( numero: number ) {
    this.router.navigate(['pages/album', numero]);
  }

  goBack() {
    this.router.navigate(['pages/fotos']);
  }

}
