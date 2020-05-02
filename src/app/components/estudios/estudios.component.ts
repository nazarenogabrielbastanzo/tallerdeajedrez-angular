import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios: any[] = [
    {
      id: ['estudio', '1'],
      titulo: 'Estudio de David Gurgenidze',
      propuesta: 'Juegan las blancas y ganan',
      img: 'assets/images/nuevas/estudio-david-gurgenidze.jpg',
      youtubeId: 'IzvwYriQ6Zs'
    },
    {
      id: ['estudio', '2'],
      titulo: 'Estudio de A. Senft',
      propuesta: 'Juegan las blancas y ganan',
      img: 'assets/images/nuevas/estudio-a-senft.jpg',
      youtubeId: 'uK2unF7pFfY'
    }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void { }

  irAlLink(link: any[]) {
    this.router.navigate(link);
  }
}
