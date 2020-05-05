import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionesService } from '../../services/peticiones.service';
/* import { Location } from '@angular/common'; */

@Component({
  selector: 'app-foto-full',
  templateUrl: './foto-full.component.html',
  styleUrls: ['./foto-full.component.css']
})
export class FotoFullComponent implements OnInit {

  album: number; // album_id
  numero: number; // numero de foto
  foto: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peticionesService: PeticionesService,
    /* private location: Location */
    private router: Router
  ) { }

  ngOnInit(): void {
    this.album = Number(this.activatedRoute.snapshot.paramMap.get('album'));
    this.numero = Number(this.activatedRoute.snapshot.paramMap.get('numero'));

    this.peticionesService.getAlbumes()
      .subscribe((data: any) => {
        this.foto = `assets/images/${ data[this.album - 1].vinculo }(${ this.numero }).jpg`;
      });
  }

  goBack( albumId: number ): void {
    /* this.location.back(); */
    this.router.navigate(['/album', albumId]);
  }

}
