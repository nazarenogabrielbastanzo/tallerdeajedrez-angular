import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partida-tringov-fischer',
  templateUrl: './partida-tringov-fischer.component.html',
  styleUrls: ['./partida-tringov-fischer.component.css']
})
export class PartidaTringovFischerComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  verPartida(nro: number): void {
    this.router.navigate(['pages/partida', nro]);
  }

}
