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
      img: 'assets/images/jorgeraulbastanzo.webp',
      titulo: 'Partidas Amistosas',
      link: '/partidas-amistosas'
    },
    {
      img: 'assets/images/Tringov_Fischer_Diagrama1.webp',
      titulo: 'Partida Tringov vs. Fischer',
      link: '/partida-tringov-fischer'
    },
    {
      img: 'assets/images/nuevas/estudio-david-gurgenidze.webp',
      titulo: 'Estudio de David Gurgenidze',
      link: '/estudio-david-gurgenidze/1'
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

  irAlLink( link: string ) {
    this.router.navigate([link]);
  }

  scrollDown() {
    window.scrollTo({
      top: 600,
      behavior: 'smooth'
    });
  }

}
