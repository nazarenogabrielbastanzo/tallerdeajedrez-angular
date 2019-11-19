import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionesService } from '../../services/peticiones.service';
import { NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
  providers: [NgbTooltipConfig]
})
export class BuscadorComponent implements OnInit {

  partidas: any[] = []; // es arreglo porque pueden ser varias las coincidencias que aparezcan
  termino: string;
  srcImgTooltip: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peticionesService: PeticionesService,
    private router: Router,
    private config: NgbTooltipConfig
  ) {
    this.activatedRoute.params.subscribe((params: any) => {
      /* console.log( params.termino ); */
      /* o bien: *//* console.log( params['termino'] ); */
      this.termino = params.termino;
      this.partidas = this.peticionesService.buscarPartidas( params.termino );
      /* console.log(this.partidas); */
    });
    this.config.placement = 'top';
    this.config.container = 'body';
  }

  ngOnInit() {}

  verPartida( numero: number ) {
    this.router.navigate(['/partida', numero]);
  }

  goBack() {
    this.router.navigate(['/partidas']);
  }

  setSrcImgTooltip(numero: number) {
    this.srcImgTooltip = `assets/images/nuevas/tooltips/${ numero }.png`;
  }

}
