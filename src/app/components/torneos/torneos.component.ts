import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {

  torneos: any = {};

  constructor() {
    this.torneos.nombre = 'FIDE Candidates 2020';

    this.torneos.url = this.torneos.nombre.toLowerCase().split(' ').join('-');
    // Si lo anterior no funciona, intentar por ejemplo:
    // this.torneos.url = 'url-del-torneo' + '/0';
    this.torneos.url = `${this.torneos.url}/0`;
  }

  ngOnInit() {
  }

}
