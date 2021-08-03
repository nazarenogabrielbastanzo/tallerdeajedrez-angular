import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit {

  id: number = 0;

  show = false;
  estudios: any[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    public peticionesService: PeticionesService
  ) { }

  ngOnInit(): void {
    this.id = (Number(this.activatedRoute.snapshot.paramMap.get('nro'))) - 1;
    this.peticionesService.getEstudios()
      .subscribe((estudios: any) => {
        this.estudios = estudios;
      });
  }

  verSolucion() {
    this.show = !this.show;
  }

}
