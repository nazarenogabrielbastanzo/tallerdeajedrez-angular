import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../services/firestore.service';
import { PeticionesService } from '../../../services/peticiones.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  opened: boolean = false;
  fillerNav = [
    {name: 'Inicio', route: 'inicio'},
    {name: 'Partidas', route: 'partidas'},
    {name: 'Estudios', route: 'estudios'},
    {name: 'Fotos', route: 'fotos'},
    {name: 'Frases', route: 'frases'},
    {name: 'Dispositivos', route: 'dispositivos'}
  ];
  partidas: any[] = [];
  estudios: any[] = [];
  frases: any[] = [];
  isAnonymous: boolean = false;
  uid: string = '';

  constructor(
    private ngFireAuth: AngularFireAuth,
    private firestoreService: FirestoreService,
    private peticionesService: PeticionesService
  ) { }

  ngOnInit(): void {
    this.ngFireAuth.signInAnonymously()
      .catch((error: { code: any; message: any; }) => {
        console.log(error.code);
        console.log(error.message);
      });

    this.ngFireAuth.onAuthStateChanged((user: any) => {
      if (user) {
        // User is signed in.
        this.isAnonymous = user.isAnonymous;
        this.uid = user.uid;
        // ...

        // Partidas
        this.firestoreService.getPartidas().subscribe((partidasSnapshot) => {
          this.partidas = [];
          partidasSnapshot.forEach((partidaData: any) => {
              this.partidas.push({
                id: partidaData.payload.doc.id,
                data: partidaData.payload.doc.data()
              });
          });
        });

        // Estudios
        this.peticionesService.getEstudios()
          .subscribe((estudios: any) => {
            this.estudios = estudios;
          });

        // Frases
        this.peticionesService.getFrases()
          .subscribe((data: any) => {
            this.frases = data;
          });
      } else {
        // User is signed out.
        // ...
      }
      // ...
    });
    // throw new Error('Method not implemented.');
  }

  toggleNav() {
    this.opened = !this.opened;
  }

  // https://stackoverflow.com/questions/48048299/angular-5-scroll-to-top-on-every-route-click/48048822
  onActivate(event: any) {
    window.scroll(0, 0);
  }
}
