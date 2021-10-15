import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../../services/peticiones.service';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent implements OnInit {

  cargando: boolean = true;
  frases: any;
  showLoading: boolean = true;

  constructor(
    private peticionesService: PeticionesService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showLoading = false;
    }, 2000);
    this.cargando = true;
    this.peticionesService.getFrases()
      .subscribe((data: any) => {
        this.cargando = false;
        this.frases = data;
      });
  }

}
