import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  partidas: any[] = [];
  termino: string;
  srcImgPop: string;
  jpg: boolean;
  gif: boolean;
  srcGIF: string;
  numero: number;

  constructor(
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private peticionesService: PeticionesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.termino = params.termino;
      this.partidas = this.peticionesService.buscarPartidas( params.termino );
    });
  }

  openLg(content: any, numero: number, tipo: string) {
    /* this.modalService.open(content, { size: 'lg' }); */
    this.modalService.open(content, { centered: true });
    this.numero = numero;
    this.setSrcImgPop(numero, tipo);
  }

  verPartida( numero: number ) {
    this.router.navigate(['/partida', numero]);
  }

  goBack() {
    this.router.navigate(['/partidas']);
  }

  setSrcImgPop(numero: number, tipo: string) {
    if (tipo === 'final') {
      this.gif = false;
      this.jpg = true;
      this.srcImgPop = `assets/images/nuevas/tooltips/${ numero }.jpg`;
    } else {
      this.jpg = false;
      this.gif = true;
      this.srcGIF = `assets/images/nuevas/gifs/${ numero }.gif`;
    }
  }

}
