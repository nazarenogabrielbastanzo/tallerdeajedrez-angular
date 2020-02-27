import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  styleUrls: ['./partidas.component.css']
})
export class PartidasComponent implements OnInit {

  partidas: any;
  info: boolean;
  infoMessage: string;
  srcImgPop: string;
  terminoDeBusqueda = '';

  constructor(
    private peticionesService: PeticionesService,
    private router: Router
  ) {
    this.peticionesService.getPartidas()
      .subscribe((data: any) => {
        this.partidas = data.reverse();
      });
    this.info = false;
    this.infoMessage = 'Ingrese un texto para buscar . . .';
  }

  ngOnInit() {
  }

  verPartida(numero: number) {
    /* console.log(numero); */
    this.router.navigate(['/partida', numero]);
  }

  buscarPartida( termino: string ) {
    // console.log(termino);
    if ( termino.trim().length ) {
      this.router.navigate(['/buscar', termino.trim()]);
    } else {
      this.info = true;
      setTimeout(() => {
        this.info = false;
      }, 4000);
      this.terminoDeBusqueda = '';
      return;
    }
  }

  setSrcImgPop(numero: number) {
    this.srcImgPop = `assets/images/nuevas/tooltips/${ numero }.webp`;
  }

}
