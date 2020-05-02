import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color = false;
  nro: number;
  movil = false;

  tarjetas = [
    {
      img: 'assets/images/jorgeraulbastanzo.jpg',
      titulo: 'Partidas Amistosas',
      link: ['partidas-amistosas'],
      extracto: 'Muchas son las ocasiones en las que se pueden jugar partidas amistosas de ajedrez: entre ronda y ronda de un torneo, antes o después de un torneo, en casa, en la plaza, en el tren, y un largo etcétera...',
      autor: 'Nazareno Gabriel Bastanzo',
      twitter: 'NazarenoGabrie2',
    },
    {
      img: 'assets/images/Tringov_Fischer_Diagrama1.jpg',
      titulo: 'Partida Tringov vs. Fischer',
      link: ['partida-tringov-fischer'],
      extracto: 'Tringov vs. Fischer, Capablanca Memorial (1965): Esta partida tiene una curiosa historia, se jugó por teletipo ya que las autoridades de Estados Unidos no le permitieron a Fischer viajar a La Habana a jugar el torneo...',
      autor: 'Taller de Ajedrez',
      twitter: 'TallerDeAjedre2'
    },
    {
      img: 'assets/images/nuevas/estudio-david-gurgenidze.jpg',
      titulo: 'Estudio de David Gurgenidze',
      link: ['estudio', '1'],
      extracto: 'Juegan las blancas y ganan la partida',
      autor: 'Jorge Raúl Bastanzo',
      twitter: 'jbastanzo'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (window.screen.width < 1024) {
      this.movil = true;
    } else {
      this.movil = false;
    }
  }

  irAlLink( link: any[] ) {
    this.router.navigate(link);
  }

  scrollDown() {
    window.scrollTo({
      top: 600,
      behavior: 'smooth'
    });
  }

}
