import { Component, OnInit, ViewEncapsulation, ViewChild, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeticionesService } from '../../services/peticiones.service';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { FirestoreService } from '../../services/firestore/firestore.service';

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
  jpg: boolean;

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  id: string;
  partida: any;
  verCompleta: boolean;

  constructor(
    private modalService: NgbModal,
    private peticionesService: PeticionesService,
    private router: Router,
    private firestoreService: FirestoreService
  ) {
    this.cargando = true;
    this.firestoreService.getPartidas().subscribe((partidasSnapshot) => {
      this.partidas = [];
      partidasSnapshot.forEach((partidaData: any) => {
        this.partidas.push({
          id: partidaData.payload.doc.id,
          data: partidaData.payload.doc.data()
        });
        this.cargando = false;
      });
      this.dtTrigger.next();
    });
    this.info = false;
    this.infoMessage = 'Ingrese un texto para buscar...';
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      ordering: true
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
    this.modalService.open(content, { centered: true, backdropClass: 'light-blue-backdrop' });
    this.numero = numero;
    this.setSrcImgPop(numero, tipo);
  }

  openLg2(content: any, id: string, verCompleta: boolean) {
    this.verCompleta = verCompleta;
    this.modalService.open(content, { centered: true, size: 'lg', backdropClass: 'light-blue-backdrop' });
    this.obtenerPartida(id);
  }

  obtenerPartida(id: string) {
    this.firestoreService.getPartida(id)
      .subscribe((partida: any) => {
        this.id = partida.payload.data().partidaId;
        this.numero = partida.payload.data().nro;
      });
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
      this.jpg = true;
      this.srcImgPop = `assets/images/nuevas/tooltips/${ numero }.jpg`;
    } else {
      this.jpg = false;
      this.gif = true;
      this.srcGIF = `assets/images/nuevas/gifs/${ numero }.gif`;
    }
  }

}
