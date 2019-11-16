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

  constructor(
    private peticionesService: PeticionesService,
    private router: Router
  ) {
    this.peticionesService.getPartidas()
      .subscribe((data: any) => {
        this.partidas = data;
      });
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
    }
  }

}
