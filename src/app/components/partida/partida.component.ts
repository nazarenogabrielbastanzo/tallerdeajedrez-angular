import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent implements OnInit {

  partida: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peticionesService: PeticionesService
  ) {
    this.activatedRoute.params.subscribe((data: any) => {
      this.partida = this.peticionesService.partidas[data.id - 1];
    });
  }

  ngOnInit() {
  }

}
