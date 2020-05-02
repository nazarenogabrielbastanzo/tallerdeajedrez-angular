import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit {

  estudios: any[] = [
    {
      titulo: 'Estudio de David Gurgenidze',
      propuesta: 'Juegan las blancas y ganan',
      img: 'assets/images/nuevas/estudio-david-gurgenidze.jpg',
      id: 'IzvwYriQ6Zs'
    },
    {
      titulo: 'Estudio de A. Senft',
      propuesta: 'Juegan las blancas y ganan',
      img: 'assets/images/nuevas/estudio-a-senft.jpg',
      id: 'uK2unF7pFfY'
    }
  ];

  id: number;

  show = false;

  constructor(
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('nro'));
  }

  verSolucion() {
    this.show = !this.show;
  }

}
