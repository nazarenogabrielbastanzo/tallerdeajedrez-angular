import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  primeraFoto: string;
  fotos = [];
  mouseEntro = false;
  nro: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peticionesService: PeticionesService,
    private router: Router
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.peticionesService.getAlbumes()
      .subscribe((data: any) => {
        /* console.log(data); */
        this.cantidadFotos = data[this.id - 1].cantidadFotos;
        for (let i = 1; i <= this.cantidadFotos; i++) {
          this.miArray.push(i);
        }
        /* this.primeraFoto = 'assets/images/' + data[this.id - 1].vinculo + '(1).jpg'; */
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.miArray.length; i++) {
          const foto = 'assets/images/' + data[this.id - 1].vinculo + '(' + (i + 1) + ').jpg';
          this.fotos.push(foto);
        }
      });
    /* console.log(this.fotos); */
  }

  ngOnInit() {
  }

  verFoto(album: number, numero: number) {
    this.router.navigate(['/foto', album, numero]);
  }

  mouseOver(indice: number) {
    this.mouseEntro = true;
    this.nro = indice;
  }

  mouseLeave(indice: number) {
    this.mouseEntro = false;
    this.nro = indice;
  }

}
