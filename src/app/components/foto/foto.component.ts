import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionesService } from '../../services/peticiones.service';

import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  encapsulation: ViewEncapsulation.None,
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
  cargando: boolean;
  laFoto: any;
  nroFoto: number;
  cantFotos: number;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];

  /* celular = (screen.width < 800) ? true : false; */

  constructor(
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private peticionesService: PeticionesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargando = true;

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.peticionesService.getAlbumes()
      .subscribe((data: any) => {
        this.cantidadFotos = data[this.id - 1].cantidadFotos;
        for (let i = 1; i <= this.cantidadFotos; i++) {
          this.miArray.push(i);
        }

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.miArray.length; i++) {
          const foto = `assets/images/${data[this.id - 1].vinculo}(${i + 1}).jpg`;
          this.fotos.push(foto);
        }

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.fotos.length; i++) {
          const gallery: NgxGalleryImage = {
              small: this.fotos[i],
              medium: this.fotos[i],
              big: this.fotos[i]
          };
          this.galleryImages.push(gallery);
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

  anterior(nroFoto: number, cantFotos: number) {
    if (nroFoto > 0) {
      this.laFoto = this.fotos[nroFoto -1];
      this.nroFoto = nroFoto -1;
    }
  }

}
