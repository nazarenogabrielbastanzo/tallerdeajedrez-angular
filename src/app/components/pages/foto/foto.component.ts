import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionesService } from '../../../services/peticiones.service';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  id: number = 0;
  cantidadFotos: number = 0;
  miArray: any[] = [];
  primeraFoto: string = '';
  fotos: any[] = [];
  mouseEntro = false;
  nro: number = 0;
  cargando: boolean = true;
  laFoto: any;
  nroFoto: number = 0;
  cantFotos: number = 0;

  /* celular = (screen.width < 800) ? true : false; */

  constructor(
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private peticionesService: PeticionesService
  ) {}

  ngOnInit() {
    this.cargando = true;

    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.peticionesService.getAlbumes()
      .subscribe((data: any) => {
        this.cantidadFotos = data[this.id - 1]['cantidadFotos'];
        for (let i = 1; i <= this.cantidadFotos; i++) {
          this.miArray.push(i);
        }

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.miArray.length; i++) {
          const foto = `assets/images/${data[this.id - 1].vinculo}(${i + 1}).jpg`;
          this.fotos.push(foto);
        }
      });
    this.cargando = false;

  }

  /* verFoto(album: number, numero: number) {
    this.router.navigate(['/foto', album, numero]);
  } */

  mouseOver(indice: number) {
    this.mouseEntro = true;
    this.nro = indice;
  }

  mouseLeave(indice: number) {
    this.mouseEntro = false;
    this.nro = indice;
  }

  openModalXL(content: any, foto: any, nroFoto: number, cantFotos: number) {
    this.modalService.open(content, { size: 'xl', backdropClass: 'light-blue-backdrop' });
    this.laFoto = foto;
    this.nroFoto = nroFoto;
    this.cantFotos = cantFotos;
  }

  cerrarModal() {
    this.modalService.dismissAll();
  }

  siguiente(nroFoto: number, cantFotos: number) {
    if (nroFoto < cantFotos) {
      this.laFoto = this.fotos[nroFoto +1];
      this.nroFoto = nroFoto +1;
    }
  }

  anterior(nroFoto: number) {
    if (nroFoto > 0) {
      this.laFoto = this.fotos[nroFoto -1];
      this.nroFoto = nroFoto -1;
    }
  }

}
