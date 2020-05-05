import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent implements OnInit {

  cargando: boolean;
  frases: any;

  constructor(
    private peticionesServices: PeticionesService
  ) { }

  ngOnInit(): void {
    this.cargando = true;
    this.peticionesServices.getFrases()
      .subscribe((data: any) => {
        this.cargando = false;
        this.frases = data;
      });
  }

}
