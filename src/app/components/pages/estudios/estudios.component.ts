import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionesService } from '../../../services/peticiones.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios: any[] = [];
  cargando: boolean = true;
  showLoading: boolean = true;

  constructor(
    public router: Router,
    public peticionesService: PeticionesService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showLoading = false;
    }, 2000);
    this.cargando = true;
    this.peticionesService.getEstudios()
      .subscribe((estudios: any) => {
        this.estudios = estudios;
        this.cargando = false;
      });
  }

  irAlLink(link: any[]) {
    this.router.navigate(link);
  }
}
