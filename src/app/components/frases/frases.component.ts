import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent implements OnInit {

  frases: any;

  constructor(
    private peticionesServices: PeticionesService
  ) {
    this.peticionesServices.getFrases()
      .subscribe((data: any) => {
        /* console.log(data); */
        this.frases = data;
      });
  }

  ngOnInit() {
  }

}
