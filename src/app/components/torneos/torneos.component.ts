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
    this.torneos.nombre = 'Magnus Carlsen Invitational 2020 Final4';
    const url = this.torneos.nombre.toLowerCase().split(' ').join('-');
    this.torneos.url = `${url}/0`;
  }

}
