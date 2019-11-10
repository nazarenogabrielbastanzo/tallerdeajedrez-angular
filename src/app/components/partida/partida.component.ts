import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent implements OnInit {

  id: number;
  partidaId: string;
  blancas: string;
  negras: string;
  resultado: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peticionesService: PeticionesService
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id')) - 1;
    this.peticionesService.getPartidas()
      .subscribe((data: any) => {
        this.partidaId = data[this.id].id;
        this.blancas = data[this.id].blancas;
        this.negras = data[this.id].negras;
        this.resultado = data[this.id].resultado;
      });
  }

  ngOnInit() {
  }

}
