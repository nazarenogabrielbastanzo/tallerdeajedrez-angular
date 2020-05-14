import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {

  torneos: any = {};

  constructor() { }

  ngOnInit(): void {
    this.torneos.nombre = 'FIDE Chesscom Online Nations Cup';
    const url = this.torneos.nombre.toLowerCase().split(' ').join('-');
    this.torneos.url = `${url}/0`;
  }

}
