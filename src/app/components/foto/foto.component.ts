import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionesService } from '../../services/peticiones.service';

import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from '@kolkov/ngx-gallery';

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
  cargando: boolean;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];

  celular = (screen.width < 800) ? true : false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peticionesService: PeticionesService,
    private router: Router
  ) { }

  ngOnInit() {

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
    this.cargando = true;
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
        this.cargando = false;
      });

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
