import { Component, OnInit } from '@angular/core';
import { MessagingService } from './shared/messaging.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  message: any;
  isAnonymous: boolean;
  uid: string;

  constructor(
    private messagingService: MessagingService,
    private angularFireAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
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
        } else {
          // User is signed out.
          // ...
        }
        // ...
      });

  }

  // https://stackoverflow.com/questions/48048299/angular-5-scroll-to-top-on-every-route-click/48048822
  onActivate(event: any) {
    window.scroll(0, 0);
  }

}
