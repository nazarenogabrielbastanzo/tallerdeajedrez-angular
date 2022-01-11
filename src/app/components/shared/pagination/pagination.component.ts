import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() size!: number;
  @Input() pagina!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
