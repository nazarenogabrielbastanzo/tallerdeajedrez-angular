import { Component, OnInit } from '@angular/core';
/* import { AuthService } from '../../services/auth.service'; */

@Component({
  selector: 'app-estudio-david-gurgenidze',
  templateUrl: './estudio-david-gurgenidze.component.html',
  styleUrls: ['./estudio-david-gurgenidze.component.css']
})
export class EstudioDavidGurgenidzeComponent implements OnInit {

  estudios: any[] = [
    {
      titulo: 'Estudio de David Gurgenidze',
      propuesta: 'Juegan las blancas y ganan la partida',
      img: 'assets/images/nuevas/estudio-david-gurgenidze.webp'
    }
  ];

  id: string;

  show = false;

  constructor(
    /* public auth: AuthService */
  ) {
    this.id = 'IzvwYriQ6Zs';
  }

  ngOnInit() {
  }

  verSolucion() {
    /* this.auth.login('estudio-david-gurgenidze/1'); */
    this.show = !this.show;
  }

}
