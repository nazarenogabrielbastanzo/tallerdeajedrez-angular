import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service'; // el authservice de auth0
import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreService } from '../../../services/firestore/firestore.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isMenuCollapsed = true;
  open: boolean;
  isAnonymous: boolean;
  uid: string;
  partidas: any;

  constructor(
    public router: Router,
    public auth: AuthService,
    private angularFireAuth: AngularFireAuth,
    private firestoreService: FirestoreService,
  ) { }

  ngOnInit() {
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
        this.firestoreService.getPartidas().subscribe((partidasSnapshot) => {
          this.partidas = [];
          partidasSnapshot.forEach((partidaData: any) => {
              this.partidas.push({
                id: partidaData.payload.doc.id,
                data: partidaData.payload.doc.data()
              });
          });
        });
      } else {
        // User is signed out.
        // ...
      }
      // ...
    });
  }

  openNav() {
    this.open = true;
  }

  closeNav() {
    this.open = false;
  }

  irAlLink(link: any[]) {
    this.router.navigate(link);
  }

}
