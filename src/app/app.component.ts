import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreService } from './services/firestore.service';
import { PeticionesService } from './services/peticiones.service';
import { ChildrenOutletContexts, NavigationEnd, Router } from '@angular/router';
import { fadeInAnimation } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation],
})
export class AppComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = [
    { name: 'Inicio', route: 'inicio' },
    { name: 'Dispositivos', route: 'pages/dispositivos' },
    { name: 'Partidas', route: 'pages/partidas' },
    { name: 'Estudios', route: 'pages/estudios' },
    { name: 'Fotos', route: 'pages/fotos' },
    { name: 'Frases', route: 'pages/frases' },
    // { name: 'Live', route: 'pages/live' },
  ];

  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;
  opened = false;
  open = false;
  isAnonymous: boolean = false;
  uid: string = '';
  partidas: any;
  estudios: any;
  frases: any;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private angularFireAuth: AngularFireAuth,
    private firestoreService: FirestoreService,
    public peticionesService: PeticionesService,
    private contexts: ChildrenOutletContexts,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 3000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    this.angularFireAuth.signInAnonymously().catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });

    this.angularFireAuth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.isAnonymous = user.isAnonymous;
        this.uid = user.uid;
        // ...
        // Partidas
        // this.firestoreService.getPartidas().subscribe((partidasSnapshot) => {
        //   this.partidas = [];
        //   partidasSnapshot.forEach((partidaData: any) => {
        //       this.partidas.push({
        //         id: partidaData.payload.doc.id,
        //         data: partidaData.payload.doc.data()
        //       });
        //   });
        // });
        this.peticionesService.getPartidas().subscribe((partidas: any) => {
          this.partidas = partidas;
        });

        this.peticionesService.getEstudios().subscribe((estudios: any) => {
          this.estudios = estudios;
        });
        this.peticionesService.getFrases().subscribe((frases: any) => {
          this.frases = frases;
        });
      } else {
        // User is signed out.
        // ...
      }
      // ...
    });
    //throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  // https://stackoverflow.com/questions/48048299/angular-5-scroll-to-top-on-every-route-click/48048822
  onActivate(event: any) {
    window.scroll(0, 0);
    // document.body.scrollTop = 0;
    // document.querySelector('body').scrollTo(0,0);
    // document.body.scroll(0, 0);
  }

  toggleNav() {
    this.opened = !this.opened;
    // this.ariaExpanded = 'aria-expanded';
    /* this.open = !this.open; */
  }

  // tslint:disable-next-line: member-ordering
  shouldRun = true;

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
