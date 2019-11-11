import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  id: number;
  cantidadFotos: number;
  miArray = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private peticionesService: PeticionesService
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.peticionesService.getAlbumes()
      .subscribe((data: any) => {
        this.cantidadFotos = data[this.id -1].cantFotos;
        for (let i = 1; i <= this.cantidadFotos; i++) {
          this.miArray.push(i);
        }
      });
  }

  ngOnInit() {
  }

}
