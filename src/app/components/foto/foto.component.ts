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
  gallery: any[] = [];

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];
  /* galleryImages: any[] = []; */

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
        /* this.primeraFoto = 'assets/images/' + data[this.id - 1].vinculo + '(1).webp'; */
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.miArray.length; i++) {
          // const foto = 'assets/images/' + data[this.id - 1].vinculo + '(' + (i + 1) + ').webp';
          const foto = `assets/images/${data[this.id - 1].vinculo}(${i + 1}).webp`;
          this.fotos.push(foto);
        }
        console.log(this.fotos);

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.fotos.length; i++) {
          /* const gallery = '{"small": "' + this.fotos[i] + '", "medium": "' + this.fotos[i] + '", "big": "' + this.fotos[i] + '"}'; */
          const gallery = `{"small": "${this.fotos[i]}", "medium": "${this.fotos[i]}", "big": "${this.fotos[i]}"}`;
          const myGallery = JSON.parse(gallery);
          this.gallery.push(myGallery);
        }

        /* this.galleryImages = this.gallery; */
        /* console.log(this.galleryImages); */

      });
    /* this.galleryImages = this.gallery; */
    /* ... */

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

    /* ... */
    
    this.galleryImages = [
      {
        small: this.fotos[0],
        medium: this.fotos[0],
        big: this.fotos[0]
      },
      {
        small: this.fotos[1],
        medium: this.fotos[1],
        big: this.fotos[1]
      },
      {
        small: this.fotos[2],
        medium: this.fotos[2],
        big: this.fotos[2]
      },
      {
        small: this.fotos[3],
        medium: this.fotos[3],
        big: this.fotos[3]
      }
    ]
    console.log(this.galleryImages);

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
