import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partidas-amistosas',
  templateUrl: './partidas-amistosas.component.html',
  styleUrls: ['./partidas-amistosas.component.css']
})
export class PartidasAmistosasComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  verPartida() {
    this.router.navigate(['pages/partida', 1]);
  }

}
