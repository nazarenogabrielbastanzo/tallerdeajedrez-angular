import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { AuthService } from '../../../services/auth.service'; // el authservice de auth0
import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreService } from '../../../services/firestore/firestore.service';
import { PeticionesService } from '../../../services/peticiones.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = [
    {name: 'Inicio', route: 'inicio'},
    {name: 'Partidas', route: 'partidas'},
    {name: 'Torneos', route: 'torneos'},
    {name: 'Estudios', route: 'estudios'},
    {name: 'Fotos', route: 'fotos'},
    {name: 'Frases', route: 'frases'},
    {name: 'Dispositivos', route: 'dispositivos'},
  ];

  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;
  opened = false;
  open = false;
  isAnonymous: boolean;
  uid: string;
  partidas: any[];
  estudios: any[];
  frases: any;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private angularFireAuth: AngularFireAuth,
    private firestoreService: FirestoreService,
    public peticionesService: PeticionesService,
    public auth: AuthService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 3000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
    if (this.auth.loggedIn) {
      this.fillerNav.push({name: 'Logout', route: 'logout'});
    }
  }
  ngOnInit(): void {
    this.angularFireAuth.auth.signInAnonymously()
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });

    this.angularFireAuth.auth.onAuthStateChanged((user) => {
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
        this.peticionesService.getEstudios()
          .subscribe((estudios: any[]) => {
            this.estudios = estudios;
          });
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
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  // https://stackoverflow.com/questions/48048299/angular-5-scroll-to-top-on-every-route-click/48048822
  onActivate(event: any) {
    window.scroll(0, 0);
  }

  toggleNav() {
    this.opened = !this.opened;
    // this.ariaExpanded = 'aria-expanded';
    /* this.open = !this.open; */
  }

  // tslint:disable-next-line: member-ordering
  shouldRun = true;
}
