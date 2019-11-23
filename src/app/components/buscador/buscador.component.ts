import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  partidas: any[] = []; // es arreglo porque pueden ser varias las coincidencias que aparezcan
  termino: string;
  srcImgPop: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peticionesService: PeticionesService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params: any) => {
      /* console.log( params.termino ); */
      /* o bien: *//* console.log( params['termino'] ); */
      this.termino = params.termino;
      this.partidas = this.peticionesService.buscarPartidas( params.termino );
      /* console.log(this.partidas); */
    });
  }

  ngOnInit() {}

  verPartida( numero: number ) {
    this.router.navigate(['/partida', numero]);
  }

  goBack() {
    this.router.navigate(['/partidas']);
  }

  setSrcImgPop(numero: number) {
    this.srcImgPop = `assets/images/nuevas/tooltips/${ numero }.png`;
  }

}
