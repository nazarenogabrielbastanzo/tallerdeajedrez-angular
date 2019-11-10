import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tarjetas = [
    {
      img: 'assets/images/jorgeraulbastanzo.jpg',
      titulo: 'Partidas Amistosas',
      texto: 'Muchas son las ocasiones en las que se pueden jugar partidas amistosas de ajedrez . . .',
      link: '/partidas-amistosas'
    },
    {
      img: 'assets/images/Tringov_Fischer_Diagrama1.jpg',
      titulo: 'Partida Tringov vs. Fischer',
      texto: 'Tringov vs. Fischer, Capablanca Memorial (1965): Esta partida . . .',
      link: '/partida-tringov-fischer'
    },
    {
      img: 'assets/images/noticias.jpg',
      titulo: 'Noticias',
      texto: 'Últimas noticias de Ajedrez, de Chess24 . . .',
      link: '/noticias'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
