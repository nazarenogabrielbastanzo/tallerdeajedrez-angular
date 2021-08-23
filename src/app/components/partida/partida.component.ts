import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent implements OnInit {

  id: number = 0;
  partidaId: string = '';
  blancas: string = '';
  negras: string = '';
  resultado: string = '';
  celular = (screen.width < 720) ? true : false;
  screenHeight: number = 0;
  screenWidth: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peticionesService: PeticionesService
  ) {
    this.getScreenSize();
  }

  ngOnInit(): void {

    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id')) - 1;
    this.peticionesService.getPartidas()
      .subscribe((data: any) => {
        this.partidaId = data[this.id].id;
        this.blancas = data[this.id].blancas;
        this.negras = data[this.id].negras;
        this.resultado = data[this.id].resultado;
      });
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
     this.screenHeight = window.innerHeight;
     this.screenWidth = window.innerWidth;
    //  console.log(this.screenWidth, this.screenHeight);

  }

}
