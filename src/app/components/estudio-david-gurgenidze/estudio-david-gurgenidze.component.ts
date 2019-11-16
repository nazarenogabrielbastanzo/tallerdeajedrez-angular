import { Component, OnInit } from '@angular/core';

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
      img: 'assets/images/nuevas/estudio-david-gurgenidze.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
