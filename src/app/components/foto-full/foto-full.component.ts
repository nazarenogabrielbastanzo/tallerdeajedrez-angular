import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-foto-full',
  templateUrl: './foto-full.component.html',
  styleUrls: ['./foto-full.component.css']
})
export class FotoFullComponent implements OnInit {

  album: number;
  numero: number;
  foto: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peticionesService: PeticionesService
  ) {
    this.album = Number(this.activatedRoute.snapshot.paramMap.get('album'));
    this.numero = Number(this.activatedRoute.snapshot.paramMap.get('numero'));

    this.peticionesService.getAlbumes()
      .subscribe((data: any) => {
        /* console.log(data); */
        this.foto = `assets/images/${ data[this.album - 1].vinculo }(${ this.numero }).jpg`;
      });
  }

  ngOnInit() {
  }

}
