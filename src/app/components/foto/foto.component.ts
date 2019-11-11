import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  id: number;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
