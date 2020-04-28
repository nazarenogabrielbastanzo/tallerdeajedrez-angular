import { Component, OnInit, ViewEncapsulation, ViewChild, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeticionesService } from '../../services/peticiones.service';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./partidas.component.css']
})
export class PartidasComponent implements OnInit, OnDestroy {

  cargando: boolean;
  partidas: any;
  info: boolean;
  infoMessage: string;
  srcImgPop: string;
  terminoDeBusqueda = '';
  numero: number;
  srcGIF: string;
  gif: boolean;
  webp: boolean;

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private modalService: NgbModal,
    private peticionesService: PeticionesService,
    private router: Router
  ) {
    this.cargando = true;
    this.peticionesService.getPartidas()
      .subscribe((data: any) => {
        this.cargando = false;
        this.partidas = data.reverse();
        this.dtTrigger.next();
      });
    this.info = false;
    this.infoMessage = 'Ingrese un texto para buscar...';
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      ordering: false
    };
    this.rerender();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
   }

  openLg(content: any, numero: number, tipo: string) {
    this.modalService.open(content, { centered: true });
    this.numero = numero;
    this.setSrcImgPop(numero, tipo);
  }

  verPartida(numero: number) {
    this.router.navigate(['/partida', numero]);
  }

  buscarPartida( termino: string ) {
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

  setSrcImgPop(numero: number, tipo: string) {
    if (tipo === 'final') {
      this.gif = false;
      this.webp = true;
      this.srcImgPop = `assets/images/nuevas/tooltips/${ numero }.webp`;
    } else {
      this.webp = false;
      this.gif = true;
      this.srcGIF = `assets/images/nuevas/gifs/${ numero }.gif`;
    }
  }

}
