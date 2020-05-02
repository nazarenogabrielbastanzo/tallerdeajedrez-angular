import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit {

  estudios: any[] = [
    {
      titulo: 'Estudio de David Gurgenidze',
      propuesta: 'Juegan las blancas y ganan la partida',
      img: 'assets/images/nuevas/estudio-david-gurgenidze.jpg'
    }
  ];

  id: string;

  show = false;

  constructor(
    /* public auth: AuthService */
  ) {
    this.id = 'IzvwYriQ6Zs';
  }

  ngOnInit(): void {
  }

  verSolucion() {
    /* this.auth.login('estudio-david-gurgenidze/1'); */
    this.show = !this.show;
  }

}
