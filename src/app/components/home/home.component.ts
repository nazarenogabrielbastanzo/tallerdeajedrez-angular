import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionesService } from '../../services/peticiones.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { MessagingService } from '../../shared/messaging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color = false;
  nro: number;
  movil = false;
  posts: any;
  isAnonymous: boolean;
  uid: string;
  message: any;

  constructor(
    private router: Router,
    private peticionesService: PeticionesService,
    private angularFireAuth: AngularFireAuth,
    private messagingService: MessagingService
  ) { }

  ngOnInit() {
    if (window.screen.width < 1024) {
      this.movil = true;
    } else {
      this.movil = false;
    }

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
        /* const userId = 'user001'; */
        this.messagingService.requestPermission(this.uid);
        this.messagingService.receiveMessage();
        this.message = this.messagingService.currentMessage;

        this.peticionesService.getPosts()
          .subscribe((posts: any) => {
            this.posts = posts;
          });
      }
    });
  }

  irAlLink( link: string ) {
    this.router.navigate([link]);
  }

  scrollDown() {
    window.scrollTo({
      top: window.scrollY + 600,
      behavior: 'smooth'
    });
  }

}
